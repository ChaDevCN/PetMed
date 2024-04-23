// 导入 TypeORM 相关的装饰器和模块
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
  Generated,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Doctors } from './doctors.entity';

@Entity()
@Tree('closure-table')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Generated('uuid')
  code: string;

  @Column({ type: 'text', nullable: true })
  introduction: string;

  @ManyToOne(() => Doctors) // 假设关联到 Doctor 实体
  headDoctor: Doctors;

  @OneToMany(() => Doctors, (doctor) => doctor.department)
  doctors: Doctors[];

  @TreeChildren()
  children: Department[];

  @TreeParent()
  parent: Department;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
