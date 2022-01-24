import { Injectable } from '@nestjs/common';
import {
  NetworkService,
  NETWORK_CHAIN_TYPE,
  Token,
  TokenService,
} from '@seongeun/aggregator-base/lib';
import { AddressInteractionService } from '../address-interaction/address-interaction.service';
import { AddressDetail } from '../address/address.dto';
import { isEmpty } from '@seongeun/aggregator-util/lib/type';
import { getBatchERC20TokenBalances } from '@seongeun/aggregator-util/lib/multicall/evm-contract';
import { flat, groupBy } from '@seongeun/aggregator-util/lib/array';
import { Provider } from '@ethersproject/providers';
import { BigNumber } from '@ethersproject/bignumber';
import { isZero } from '@seongeun/aggregator-util/lib/bignumber';
import { divideDecimals } from '@seongeun/aggregator-util/lib/decimals';
import { IFullFilled } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly networkService: NetworkService,
    private readonly tokenService: TokenService,
    private readonly addressInteractionService: AddressInteractionService,
  ) {}

  async getAssets(addressDetail: AddressDetail) {
    const { address, chainType } = addressDetail;

    const tokens =
      await this.addressInteractionService.getAddressWithTokenInteractions(
        address,
      );

    // interaction 없을 경우
    if (isEmpty(tokens)) {
      return [];
    }

    switch (chainType) {
      case NETWORK_CHAIN_TYPE.EVM: {
        return this._balanceOfInEVM(address, tokens);
      }
      case NETWORK_CHAIN_TYPE.TERRA: {
        return this._balanceOfInTerra(address, tokens);
      }
      default: {
        return [];
      }
    }
  }

  // EVM 체인 자산 추적
  private async _balanceOfInEVM(address: string, tokens: Token[]) {
    const groupByNetwork = groupBy(tokens, 'network.chainKey');

    // 특정 네트워크 노드 중단 시에도 타 네트워크는 동작
    const result = await Promise.allSettled(
      Object.keys(groupByNetwork).map(async (chainKey: string) => {
        const tokens = groupByNetwork[chainKey];

        const tokenAddresses = tokens.map(({ address }) => address);
        const provider = this.networkService.provider(chainKey);
        const multiCallAddress = this.networkService.multiCallAddress(chainKey);

        const balances = await getBatchERC20TokenBalances(
          provider as Provider,
          multiCallAddress,
          [address],
          tokenAddresses,
        );

        return this._formatTokenWithBalance(tokens, balances);
      }),
    );

    return flat(
      (
        result.filter(({ status }) => status === 'fulfilled') as IFullFilled[]
      ).map(({ value }) => value),
    );
  }

  // TERRA 체인 자산 추적
  private _balanceOfInTerra(address: string, tokens: Token[]) {
    return;
  }

  private _formatTokenWithBalance(tokens: Token[], balances: BigNumber[]) {
    const output = [];

    tokens.forEach((token, index) => {
      const balance = balances[index];
      if (isZero(balance)) return;

      const amount = divideDecimals(balance, token.decimals).toString();

      output.push({
        ...token,
        _portfolio: {
          amount,
        },
      });
    });
    return output;
  }
}
