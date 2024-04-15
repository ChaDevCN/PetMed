import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nick_name',
    length: 50,
    comment: '昵称',
  })
  nickName: string;

  @Column({
    comment: '邮箱',
    length: 50,
    nullable: true,
  })
  email: string;

  @Column({
    comment: '学历',
    length: 50,
    nullable: true,
  })
  education: string;

  @Column({
    comment: '是否冻结',
    default: false,
  })
  isFrozen: boolean;

  @Column({
    comment: '头像',
    length: 100,
    nullable: true,
  })
  headPic: string;

  @Column({ length: 255, nullable: true })
  workExperience?: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
