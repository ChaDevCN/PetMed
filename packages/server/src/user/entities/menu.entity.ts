import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  TreeChildren,
  TreeParent,
  Tree,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  link: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @TreeChildren()
  children: Menu[];

  @TreeParent()
  parent: Menu;
}
