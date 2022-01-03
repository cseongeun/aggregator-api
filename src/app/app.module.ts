import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { MysqlConfigService } from './mysql/mysql-config.service';

@Module({
  imports: [
    AddressModule,
    TypeOrmModule.forRootAsync({ useClass: MysqlConfigService }),
  ],
})
export class AppModule {}
