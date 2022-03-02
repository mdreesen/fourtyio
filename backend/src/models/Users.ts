import { BirthWorker } from 'src/models/BirthWorker';
import { UserDetails } from 'src/models/UserDetails';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Users extends BaseEntity {
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

  @OneToOne(() => UserDetails)
  @JoinColumn()
  user_details?: UserDetails;

  @ManyToOne(() => BirthWorker, (birthworker: { id: number }) => birthworker.id)
  associated_users!: BirthWorker;
}
