import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";

@Entity()

export default class AssetHistory extends AbstractEntity{
    @Column()
    serialNumber: string;
    
    @Column()
    status: string;

    @Column()
    userId: number;
}