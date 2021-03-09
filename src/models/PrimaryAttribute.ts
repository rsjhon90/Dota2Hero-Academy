import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('primaryAttributes')
class PrimaryAttribute {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  attribute: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PrimaryAttribute;
