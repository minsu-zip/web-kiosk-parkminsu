import { Module } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Menu } from '@src/menus/entities/menu.entity'
import { OptionDetail } from '@src/options/entities/optionDetail.entity'
import { Option } from '@src/options/entities/option.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category, Menu, Option, OptionDetail])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
