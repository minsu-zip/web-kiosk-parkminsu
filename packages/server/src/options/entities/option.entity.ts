import { Column, Entity, OneToMany } from 'typeorm'
import { OptionDetail } from './optionDetail.entity'
import { CommonEntity } from '@common/CommonEntity'

@Entity({ name: 'option_table' })
export class Option extends CommonEntity {
  @Column({ type: 'varchar', length: 30 })
  name!: string

  @OneToMany(() => OptionDetail, (optionDetail) => optionDetail.option)
  details: OptionDetail[]
}
