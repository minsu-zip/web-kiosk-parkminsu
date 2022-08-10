import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { map } from 'rxjs'
import { Repository } from 'typeorm'
import { Category } from './entities/category.entity'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private menuRepository: Repository<Category>,
  ) {}

  async findAll() {
    try {
      const categories = await this.menuRepository
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.menu', 'menu')
        .orderBy('category.id')
        .getMany()

      if (!categories)
        throw new HttpException(
          '카테고리 정보가 없습니다.',
          HttpStatus.NOT_FOUND,
        )

      const sortCategory = categories.map((category) => {
        category.menu.sort((a, b) => b.sellCount - a.sellCount)
        return category
      })

      const data = sortCategory.map(({ id, createdAt, name, menu }) => ({
        id,
        createdAt,
        name,
        menus: menu,
      }))

      return data
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} category`
  }

  remove(id: number) {
    return `This action removes a #${id} category`
  }
}
