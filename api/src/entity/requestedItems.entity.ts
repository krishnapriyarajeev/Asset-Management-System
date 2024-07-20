import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Requests from "./requests.entity";
import Subcategory from "./subcategory.entity";

@Entity()

export default class RequestedItems extends AbstractEntity{

    @Column()
    reason: string;

    @Column()
    requestType: string;

    @ManyToOne(() => Requests, (requests) => requests.requestedItems)
    @JoinColumn()
    requests: Requests;

    @ManyToOne(() => Subcategory, (subcategory) => subcategory.requestedItems)
    @JoinColumn()
    subcategory: Subcategory;
}