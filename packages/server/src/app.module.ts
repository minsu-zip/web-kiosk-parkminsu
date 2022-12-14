import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MySqlConfigModule } from './config/database/config.module'
import { MySqlConfigService } from './config/database/config.service'
import { OptionsModule } from './options/options.module'
import { MenusModule } from './menus/menus.module'
import { CategoriesModule } from './categories/categories.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    OptionsModule,
    MenusModule,
    CategoriesModule,
  ],
})
export class AppModule {}
