import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from '../mysql/mysql.config';
import { PortfolioModule } from '../../portfolio/portfolio.module';
import { AddressInteractionModule } from '../../address-interaction/address-interaction.module';
import { AddressModule } from '../../address/address.module';

export class TestModule {
  module: TestingModule;
  app: INestApplication;

  async createTestModule(): Promise<INestApplication> {
    this.module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({ useClass: MysqlConfig }),

        AddressModule,
        AddressInteractionModule,
        PortfolioModule,
      ],
    }).compile();

    this.app = this.module.createNestApplication();

    await this.app.init();
    return this.app;
  }
}
