import { Controller, Get, Req } from '@nestjs/common';
import { ROUTE_PATH } from './address.constant';
import { AddressService } from './address.service';

@Controller(ROUTE_PATH.ROOT)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(ROUTE_PATH.GET_ADDRESS_DETAIL)
  main(@Req() req) {
    console.log(req);
    return {};
  }
}
