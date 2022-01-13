import { Controller, Get } from '@nestjs/common';
import { DeFiProtocolService } from '@seongeun/aggregator-defi-protocol/lib/defi-protocol.service';

@Controller('address')
export class AddressController {
  constructor(private readonly defiProtocolService: DeFiProtocolService) {}

  @Get()
  async getHello(): Promise<string> {
    const service = await this.defiProtocolService.getService(25);
    console.log(service);

    return 'hello';
  }
}
