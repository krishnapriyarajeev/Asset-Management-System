import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Category from "./category.entity";
import Assets from "./assets.entity";
import RequestedItems from "./requestedItems.entity";

@Entity()

export default class Subcategory extends AbstractEntity{
    @Column()
    brandName: string;

    @Column()
    modelName: string;

    @Column()
    subcategoryName: string;

    @ManyToOne(() => Category, (category) => category.subcategory)
    @JoinColumn()
    category: Category;

    @OneToMany(() => Assets, (assets) => assets.subcategory)
    assets: Assets[];

    @OneToMany(() => RequestedItems, (requestedItems) => requestedItems.subcategory)
    requestedItems: RequestedItems[];
}