import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export default class User2 {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({ unique: true })
  public email: string;
 
  @Column()
  public name: string;
 
  @Column()
  public password: string;
}
