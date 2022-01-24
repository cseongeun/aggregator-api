import { Test, TestingModule } from '@nestjs/testing';
import { AddressInteractionService } from './address-interaction.service';

describe('AddressInteractionService', () => {
  let service: AddressInteractionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressInteractionService],
    }).compile();

    service = module.get<AddressInteractionService>(AddressInteractionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
