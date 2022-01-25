import { Injectable } from '@nestjs/common';
import { isEmpty } from '@seongeun/aggregator-util/lib/type';
import { AddressInteractionService } from '../../address-interaction/address-interaction.service';
import { AddressDetail } from '../../address/address.dto';

@Injectable()
export class PortfolioFarmService {
  constructor(
    private readonly addressInteractionService: AddressInteractionService,
  ) {}

  async getFarms(addressDetail: AddressDetail) {
    const { address } = addressDetail;

    const farms =
      await this.addressInteractionService.getAddressWithFarmInteractions(
        address,
      );

    if (isEmpty(farms)) {
      return [];
    }

    
  }
}
