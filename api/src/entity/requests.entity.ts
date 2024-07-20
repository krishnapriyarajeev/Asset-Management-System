import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import { RequestStatus } from "../utils/requestStatus.enum";
import RequestedItems from "./requestedItems.entity";
import Employee from "./employee.entity";

@Entity()

export default class Requests extends AbstractEntity{
    @Column()
    employeeid: number;

    @Column()
    status: RequestStatus; 

    @OneToMany(() => RequestedItems, (requestedItems) => requestedItems.requests)
    requestedItems: RequestedItems;

    @ManyToOne(() => Employee, (employee) => employee.requests)
    @JoinColumn()
    employee: Employee;
}