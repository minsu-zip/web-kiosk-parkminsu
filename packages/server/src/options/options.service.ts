import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Option } from './entities/option.entity'

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  findAll() {
    return this.optionRepository.find()
  }

  findOne(id: number) {
    return this.optionRepository.findOneBy({ id })
  }
}
