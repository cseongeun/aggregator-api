import { Module } from '@nestjs/common';
import { InteractionModule } from '@seongeun/aggregator-base/lib';
import { AddressInteractionService } from './address-interaction.service';

@Module({
  imports: [InteractionModule],
  providers: [AddressInteractionService],
  exports: [AddressInteractionService],
})
export class AddressInteractionModule {}
