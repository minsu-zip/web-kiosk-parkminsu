import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Option } from './entities/option.entity'

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  async findAll() {
    try {
      const data = await this.optionRepository
        .createQueryBuilder('option')
        .leftJoinAndSelect('option.details', 'details')
        .getMany()

      if (!data)
        throw new HttpException('옵션 정보가 없습니다.', HttpStatus.NOT_FOUND)

      return data
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY)
    }
  }

  findOne(id: number): Promise<Option> {
    return this.optionRepository.findOneBy({ id })
  }
}
