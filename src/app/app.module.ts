import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from './mysql/mysql-config.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: MysqlConfigService })],
})
export class AppModule {}
