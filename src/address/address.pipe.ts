import { HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { NETWORK_CHAIN_TYPE } from '@seongeun/aggregator-base/lib/constant';
import { isAddress } from '@seongeun/aggregator-util/lib/address/evm';
import { isValidate } from '@seongeun/aggregator-util/lib/address/terra';
import { EXCEPTION_CODE } from '../app/exception/exception.constant';
import { Exception } from '../app/exception/request.exception';
import { AddressDetail } from './address.dto';

@Injectable()
export class AddressParamPipe implements PipeTransform {
  transform(value: string): AddressDetail {
    // EVM
    if (isAddress(value)) {
      return { address: value, chainType: NETWORK_CHAIN_TYPE.EVM };
    }

    // TERRA
    if (isValidate(value)) {
      return { address: value, chainType: NETWORK_CHAIN_TYPE.TERRA };
    }

    throw new Exception(EXCEPTION_CODE.ERR0002, HttpStatus.BAD_REQUEST);
  }
}
