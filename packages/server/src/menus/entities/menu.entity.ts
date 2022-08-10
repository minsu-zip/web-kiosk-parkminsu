import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Unique,
} from 'typeorm'
import { CommonEntity } from '@common/CommonEntity'
import { Option } from '@src/options/entities/option.entity'
import { Category } from '@src/categories/entities/category.entity'

@Entity()
@Unique(['name'])
export class Menu extends CommonEntity {
  @Column({ type: 'varchar', length: 20 })
  name!: string

  @Column({ type: 'text' })
  imgUrl1: string

  @Column({ type: 'text' })
  imgUrl2: string

  @Column({ type: 'int' })
  price!: number

  @Column({ type: 'int' })
  categoryId: number

  @Column({ type: 'int' })
  sellCount: number

  @ManyToOne(() => Category, (category) => category.menu)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  @ManyToMany(() => Option)
  @JoinTable({
    name: 'menu_option_table',
    joinColumn: { name: 'menuId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'optionId', referencedColumnName: 'id' },
  })
  options: Option[]
}
