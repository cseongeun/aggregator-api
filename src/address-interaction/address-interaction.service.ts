import { Injectable } from '@nestjs/common';
import {
  InteractionService,
  INTERACTION_TYPE,
  Token,
} from '@seongeun/aggregator-base/lib';
import { TokenInteractionResponse } from '@seongeun/aggregator-base/lib/interaction/interaction.dto';

@Injectable()
export class AddressInteractionService {
  constructor(private interactionService: InteractionService) {}

  /**
   * 특정 주소와 토큰의 상호작용
   * @param address 주소
   * @returns
   */
  async getAddressWithTokenInteractions(address: string): Promise<Token[]> {
    return this.interactionService.getTokenInteractions(address);
  }
}
