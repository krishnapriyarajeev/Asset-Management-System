import { Column, Entity } from "typeorm";
import AbstractEntity from "./abstract.entity";

@Entity()

export default class UserHistory extends AbstractEntity{
    @Column()
    userId: number;
    
    @Column()
    action: string;

    @Column()
    assetId: number;
}