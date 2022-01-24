import { Controller, Get, Param } from '@nestjs/common';
import { AddressDetail } from '../address/address.dto';
import { AddressParamPipe } from '../address/address.pipe';
import { ROUTE_PATH } from './portfolio.constant';
import { PortfolioService } from './portfolio.service';

@Controller(ROUTE_PATH.ROOT)
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get(ROUTE_PATH.GET_ASSET)
  getAssetPortfolio(@Param(AddressParamPipe) addressDetail: AddressDetail) {
    return this.portfolioService.getAssets(addressDetail);
  }
}
