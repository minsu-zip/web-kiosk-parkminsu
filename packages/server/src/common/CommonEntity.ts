import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

export class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date
}
