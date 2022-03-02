import { Users } from 'src/models/Users';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class BirthWorker extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 100 })
  first_name!: string;

  @Column({ type: 'varchar', length: 100 })
  last_name!: string;

  @Column({ type: 'varchar', length: 255 })
  password!: string;

  @OneToMany(() => Users, (users: { id: number }) => users.id)
  associated_users?: Users[];
}
