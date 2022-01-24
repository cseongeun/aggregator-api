import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { NetworkModule, TokenModule } from '@seongeun/aggregator-base/lib';
import { AddressInteractionModule } from '../address-interaction/address-interaction.module';

@Module({
  imports: [NetworkModule, TokenModule, AddressInteractionModule],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
