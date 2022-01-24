import { HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { NETWORK_CHAIN_TYPE } from '@seongeun/aggregator-base/lib/constant';
import { isAddress } from '@seongeun/aggregator-util/lib/address/evm';
import { isValidate } from '@seongeun/aggregator-util/lib/address/terra';
import { EXCEPTION_CODE } from '../app/exception/exception.constant';
import { Exception } from '../app/exception/request.exception';
import { AddressDetail } from './address.dto';

/**
 * 인풋 (주소) => 아웃풋 (주소, 체인타입)
 */
@Injectable()
export class AddressParamPipe implements PipeTransform {
  transform(value: Record<string, string>): AddressDetail {
    const address = value?.address;
    // EVM
    if (isAddress(address)) {
      return { address, chainType: NETWORK_CHAIN_TYPE.EVM };
    }

    // TERRA
    if (isValidate(address)) {
      return { address, chainType: NETWORK_CHAIN_TYPE.TERRA };
    }

    throw new Exception(EXCEPTION_CODE.ERR0002, HttpStatus.BAD_REQUEST);
  }
}
