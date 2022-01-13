import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { DefiProtocolModule } from '@seongeun/aggregator-defi-protocol/lib/defi-protocol.module';
import { AddressController } from './address.controller';

@Module({
  imports: [DefiProtocolModule],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
