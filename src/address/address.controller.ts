import { Controller, Get, Param, Req } from '@nestjs/common';
import { ROUTE_PATH } from './address.constant';
import { AddressDetail } from './address.dto';
import { AddressParamPipe } from './address.pipe';
import { AddressService } from './address.service';

@Controller(ROUTE_PATH.ROOT)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(ROUTE_PATH.GET_ADDRESS_DETAIL)
  main(@Param(AddressParamPipe) addressDetail: AddressDetail) {
    return addressDetail;
  }
}
