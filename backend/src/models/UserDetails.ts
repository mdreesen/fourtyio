import { Users } from 'src/models/Users';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  preferred_name?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  language?: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  date_of_birth?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  maiden_name?: string;

  // MUST BE ENCRYPTED...
  @Column({ type: 'varchar', length: 100, unique: true, nullable: true })
  ssn?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  marital_status?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  ethnicity?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  occupation?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  religion?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  highest_education?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  living_will?: string;

  @Column({ type: 'bool', nullable: true })
  organ_donor?: boolean;

  @Column({ type: 'text', nullable: true })
  cultral_preferences?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  primary_address?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  secondary_address?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  referral?: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  primary_phone?: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  secondary_phone?: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  do_not_contact_route?: string;

  @Column({ type: 'bool', nullable: true })
  grant_permission?: boolean;

  @Column({ type: 'varchar', length: 200, nullable: true })
  preferred_method_of_contact?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  emergency_contact?: string;

  @Column({ type: 'int', unique: true })
  user!: Users;
}
