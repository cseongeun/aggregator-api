import { Controller, Get, Param } from '@nestjs/common';
import { AddressDetail } from '../address/address.dto';
import { AddressParamPipe } from '../address/address.pipe';
import { ROUTE_PATH } from './portfolio.constant';
import { AssetResponseDTO } from './dto/portfolio.asset.dto';
import { PortfolioAssetService } from './service/portfolio.asset.service';

@Controller(ROUTE_PATH.ROOT)
export class PortfolioController {
  constructor(private readonly portfolioAssetService: PortfolioAssetService) {}

  @Get(ROUTE_PATH.GET_ASSET)
  async getAssetPortfolio(
    @Param(AddressParamPipe) addressDetail: AddressDetail,
  ): Promise<AssetResponseDTO[]> {
    const result = await this.portfolioAssetService.getAssets(addressDetail);

    return result.map((r) => new AssetResponseDTO(r));
  }
}
