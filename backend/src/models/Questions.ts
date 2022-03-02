import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  answers!: string;

  // This is the questions table?
  // @Column()
  // feelings!: string;

  // @Column()
  // associateWithWorker!: string;
}
