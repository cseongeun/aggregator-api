import { Module } from '@nestjs/common';
import { PortfolioAssetService } from './service/portfolio.asset.service';
import { PortfolioController } from './portfolio.controller';
import { NetworkModule, TokenModule } from '@seongeun/aggregator-base/lib';
import { AddressInteractionModule } from '../address-interaction/address-interaction.module';

@Module({
  imports: [NetworkModule, TokenModule, AddressInteractionModule],
  providers: [PortfolioAssetService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
