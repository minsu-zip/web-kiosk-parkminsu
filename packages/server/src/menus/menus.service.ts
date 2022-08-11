import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Menu } from './entities/menu.entity'

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  async findOne(id: number): Promise<Menu> {
    try {
      const menuInfo = await this.menuRepository
        .createQueryBuilder('menu')
        .leftJoinAndSelect('menu.options', 'options')
        .leftJoinAndSelect('options.details', 'details')
        .where('menu.id = :id', { id })
        .orderBy('details.id')
        .getOne()

      if (!menuInfo)
        throw new HttpException('메뉴 정보가 없습니다.', HttpStatus.NOT_FOUND)

      return menuInfo
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY)
    }
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find()
  }

  async remove(id: number) {
    try {
      const deletedMenu = await Menu.findOneBy({ id })
      if (!deletedMenu)
        throw new HttpException('메뉴 정보가 없습니다.', HttpStatus.NOT_FOUND)
      await Menu.delete(id)
      return { message: '메뉴 삭제 완료' }
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY)
    }
  }
}
