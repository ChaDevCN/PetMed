// 导入 TypeORM 相关的装饰器和模块
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
  BeforeInsert,
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

  @BeforeInsert()
  async generateCode() {
    const parentCode = this.parent ? this.parent.code : '';
    const lastChild = this.children[this.children.length - 1];
    const lastChildCode = lastChild ? lastChild.code : parentCode + '000';

    const lastNumStr = lastChildCode.slice(parentCode.length);
    const lastNum = parseInt(lastNumStr); // 将字符串转换为数字
    const newNum = lastNum + 1; // 自增1
    const newNumStr = newNum.toString().padStart(lastNumStr.length, '0');

    this.code = parentCode + newNumStr;
  }
}
