import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity()
@ObjectType()
export class Doctors {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column({ comment: '科室', length: 20 })
  department: string;

  @Field()
  @Column({ comment: '医生姓名', length: 50 })
  name: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 5, scale: 2, comment: '抽成比例' })
  commissionRate: number;

  @Field(() => Int)
  @Column({ comment: '医生性别' })
  gender: 0 | 1;

  @Field(() => Int)
  @Column({ comment: '医生年龄' })
  age: number;

  @Field(() => Int)
  @Column({ comment: '手机号码', length: 11 })
  phoneNumber: string;

  @Field(() => Int)
  @Column({
    comment: '状态',
  })
  status: 0 | 1 | 2 | 3;

  @Field(() => Int, { nullable: true })
  @Column({ comment: '工作经验', nullable: true })
  experience: number;

  @Field({ nullable: true })
  @Column({ comment: '医生简介', nullable: true })
  introduction: string;

  @Field(() => [Schedule], { nullable: true })
  @OneToMany(() => Schedule, (schedule) => schedule.doctor)
  schedules: Schedule[]; // 关联的排班信息

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
