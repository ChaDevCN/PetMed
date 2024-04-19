import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Doctors } from './doctors.entity';

// 定义枚举类型 Shift，表示排班班次
enum Shift {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
}

// 定义枚举类型 Status，表示排班状态
enum Status {
  Available = 'Available',
  Full = 'Full',
  Cancelled = 'Cancelled',
}

// GraphQL ObjectType，表示排班信息
@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number; // 排班记录ID

  @ManyToOne(() => Doctors, (doctor) => doctor.schedules)
  doctor: Doctors; // 关联的医生信息

  @Index()
  @Column({ type: 'date' })
  date: Date; // 日期

  @Column({ type: 'time' })
  startTime: Date; // 开始时间

  @Column({ type: 'time' })
  endTime: Date; // 结束时间

  @Column({ default: 0 })
  maxAppointments: number; // 最大接诊人数，默认为0表示无限制

  @Column({ type: 'enum', enum: Shift, default: Shift.Morning })
  shift: Shift; // 排班班次

  @Column({ type: 'enum', enum: Status, default: Status.Available })
  status: Status; // 排班状态

  @Column({ nullable: true })
  remarks: string; // 备注信息

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
