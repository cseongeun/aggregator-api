import { Injectable } from '@nestjs/common';
import { Farm, InteractionService, Token } from '@seongeun/aggregator-base/lib';

@Injectable()
export class AddressInteractionService {
  constructor(private interactionService: InteractionService) {}

  /**
   * 특정 주소와 토큰의 상호작용
   * @param address 주소
   * @returns 주소와 상호작용한 토큰 리스트
   */
  async getAddressWithTokenInteractions(address: string): Promise<Token[]> {
    return this.interactionService.getTokenInteractions(address);
  }

  /**
   * 특정 주소와 팜의 상호작용
   * @param address 주소
   * @returns 주소와 상호작용한 팜 리스트
   */
  async getAddressWithFarmInteractions(address: string): Promise<Farm[]> {
    return this.interactionService.getFarmInteractions(address);
  }
}
