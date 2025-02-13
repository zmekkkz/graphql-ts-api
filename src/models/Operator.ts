import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity('operator')
export class Operator {
  @Field(() => ID)
  @PrimaryColumn({ name: 'id' })
  id!: string;

  @Field()
  @Column({ name: 'seq' })
  seq!: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  created_at!: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deleted_at?: Date;

  @Field()
  @Column({ name: 'operator_id' })
  operator_id!: string;

  @Field()
  @Column({ name: 'operator_name' })
  operator_name!: string;

  @Field()
  @Column({ name: 'c_id' })
  c_id!: string;

  @Field()
  @Column({ name: 'hash_cid' })
  hash_cid!: string;

  @Field()
  @Column({ name: 'position' })
  position!: string;

  @Field()
  @Column({ name: 'operation_unit_id' })
  operation_unit_id!: string;

  @Field()
  @Column({ name: 'username_type' })
  username_type!: string;

  @Field()
  @Column({ name: 'user_operation_unit_type' })
  user_operation_unit_type!: string;

  @Field()
  @Column({ name: 'provider_id' })
  provider_id!: string;

  @Field()
  @Column({ name: 'health_id' })
  health_id!: string;

  @Field()
  @Column({ name: 'health_zone' })
  health_zone!: string;

  @Field()
  @Column({ name: 'province_code' })
  province_code!: string;

  @Field()
  @Column({ name: 'created_at_bi' })
  created_at_bi!: Date;

  @Field()
  @Column({ name: 'updated_at_bi' })
  updated_at_bi!: Date;
}