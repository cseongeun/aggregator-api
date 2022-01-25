import { INestApplication } from '@nestjs/common';
import { NETWORK_CHAIN_TYPE } from '@seongeun/aggregator-base/lib';
import { TestModule } from '../../app/test/test.mdoule';
import { PortfolioService } from './portfolio.asset.service';

describe('PortfolioService', () => {
  const testModule = new TestModule();
  let app: INestApplication;
  let service: PortfolioService;

  beforeAll(async () => {
    app = await testModule.createTestModule();
    service = await app.get<PortfolioService>(PortfolioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTokenInteraction', () => {
    it('동작 테스트', async () => {
      const address = '0xFDcBF476B286796706e273F86aC51163DA737FA8';
      const chainType = NETWORK_CHAIN_TYPE.EVM;
      const interactions = await service.getAssets({ address, chainType });
      console.log(interactions);
    });
  });
});
