import { Injectable } from '@nestjs/common';
import { InteractionService, TokenService } from '@seongeun/aggregator-base';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly interactionService: InteractionService,
    private readonly tokenService: TokenService,
  ) {}
}
