import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import PrimaryAttribute from './PrimaryAttribute';

@Entity('heroes')
class Hero {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  baseStrength: number;

  @Column()
  hpRegeneration: number;

  @Column()
  baseMaxHP: number;

  @Column()
  baseAgility: number;

  @Column()
  attackSpeed: number;

  @Column()
  baseArmor: number;

  @Column()
  baseIntelligence: number;

  @Column()
  baseManaRegen: number;

  @Column()
  baseMaxMana: number;

  @Column()
  baseAtackDamage: number;

  @Column()
  attackRange: number;

  @Column()
  baseMoveSpeed: number;

  @Column()
  primaryAttribute_id: number;

  @ManyToOne(() => PrimaryAttribute)
  @JoinColumn({ name: 'primaryAttribute_id' })
  primaryAttribute: PrimaryAttribute;

  @Column()
  strengthPerLevel: number;

  @Column()
  agilityPerLevel: number;

  @Column()
  intelligencePerLevel: number;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Hero;
