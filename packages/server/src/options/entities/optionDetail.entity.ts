import { Column, Entity, ManyToOne } from 'typeorm'
import { CommonEntity } from '@common/CommonEntity'
import { Option } from './option.entity'

@Entity()
export class OptionDetail extends CommonEntity {
  @Column({ type: 'varchar', length: 20 })
  name: string

  @Column()
  price: number

  @ManyToOne(() => Option, (option) => option.details)
  option: Option
}
