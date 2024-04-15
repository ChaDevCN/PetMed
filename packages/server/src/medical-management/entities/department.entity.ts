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
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Doctors } from './doctors.entity';

@Entity()
@ObjectType()
@Tree('closure-table')
export class Department {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field({ description: '科室名称' })
  @Column()
  name: string;

  @Field({ description: '科室编号' })
  @Column()
  code: string;

  @Field({ nullable: true, description: '科室介绍' })
  @Column({ type: 'text', nullable: true })
  introduction: string;

  @Field({ description: '科室主任姓名' })
  @Column()
  head: string;

  @Field(() => [Doctors], { description: '科室下的医生信息' })
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
