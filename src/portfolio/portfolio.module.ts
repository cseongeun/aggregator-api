import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { InteractionModule, TokenModule } from '@seongeun/aggregator-base';

@Module({
  imports: [InteractionModule, TokenModule],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
