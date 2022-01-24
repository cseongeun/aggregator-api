import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { MysqlConfig } from './app/mysql/mysql.config';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AddressInteractionModule } from './address-interaction/address-interaction.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: MysqlConfig }),
    AddressModule,
    PortfolioModule,
    AddressInteractionModule,
  ],
})
export class AppModule {}
