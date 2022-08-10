import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export class MySqlConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('MYSQL_HOST'),
      username: this.configService.get<string>('MYSQL_USER'),
      password: this.configService.get<string>('MYSQL_PW'),
      port: +this.configService.get<number>('MYSQL_PORT'),
      database: this.configService.get<string>('MYSQL_DB'),
      entities: ['dist/**/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }
  }
}
