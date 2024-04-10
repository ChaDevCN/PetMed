import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { Menu } from './menu.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @ManyToMany(() => PermissionEntity)
  @JoinTable({
    name: 'role_permission_relation',
  })
  @ManyToMany(() => Menu)
  @JoinTable({
    name: 'role_menu_relation', // 假设存在 role_menu_relation 表来管理角色和菜单之间的关系
  })
  menus: Menu[];
  permissions: PermissionEntity[];
}
