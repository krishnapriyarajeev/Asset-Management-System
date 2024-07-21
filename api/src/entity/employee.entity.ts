import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, Unique } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
import { Role } from "../utils/role.enum";
import Department from "./department.entity";
import { Status } from "../utils/status.enum";
import Assets from "./assets.entity";
import Requests from "./requests.entity";


@Entity()
@Unique(["email"])
export default class Employee extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  role: Role;

  @Column()
  status: Status;

  @Column()
  experience: number;

  @Column()
  joinDate: Date;

  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true,
    onDelete: "CASCADE",
  })
  address: Address;

  @ManyToOne(() => Department, (department) => department.employee)
  department: Department;

  @OneToMany(() => Assets, (assets) => assets.employee)
    assets: Assets;

  @OneToMany(() => Requests, (requests) => requests.employee)
    requests: Requests;

}
