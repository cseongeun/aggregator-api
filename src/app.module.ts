import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { MysqlConfig } from './app/mysql/mysql.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: MysqlConfig }),
    AddressModule,
  ],
})
export class AppModule {}
