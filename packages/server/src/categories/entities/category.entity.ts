import { CommonEntity } from '@common/CommonEntity'
import { Menu } from '@src/menus/entities/menu.entity'
import { Column, Entity, OneToMany, Unique } from 'typeorm'

@Entity()
@Unique(['name'])
export class Category extends CommonEntity {
  @Column({ type: 'varchar', length: 20 })
  name!: string

  @OneToMany(() => Menu, (menu) => menu.category)
  menu: Menu[]
}
