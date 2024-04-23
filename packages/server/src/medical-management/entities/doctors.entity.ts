import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Schedule } from './schedule.entity';
import { Department } from './department.entity';

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, (department) => department.doctors)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @Column({ comment: '医生姓名', length: 50 })
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, comment: '抽成比例' })
  commissionRate: number;

  @Column({ comment: '医生性别' })
  gender: 0 | 1;

  @Column({ comment: '医生年龄' })
  age: number;

  @Column({ comment: '手机号码', length: 11 })
  phoneNumber: string;

  @Column({
    comment: '状态',
  })
  status: 0 | 1 | 2 | 3;

  @Column({ comment: '工作经验', nullable: true })
  experience: number;

  @Column({ comment: '医生简介', nullable: true })
  introduction: string;

  @OneToMany(() => Schedule, (schedule) => schedule.doctor)
  schedules: Schedule[]; // 关联的排班信息

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
