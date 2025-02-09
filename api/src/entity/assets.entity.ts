import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Category from "./category.entity";
import Subcategory from "./subcategory.entity";
import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "./employee.entity";

@Entity()

export default class Assets extends AbstractEntity{
    @Column()
    serialNumber: string;
    
    @Column()
    status: AssetStatus;

    @Column()
    employeeid: number;

    @Column()
    subcategoryid: number;

    @ManyToOne(() => Subcategory, (subcategory) => subcategory.assets)
    @JoinColumn()
    subcategory: Subcategory;

    @ManyToOne(() => Employee, (employee) => employee.assets)
    @JoinColumn()
    employee: Employee;

}