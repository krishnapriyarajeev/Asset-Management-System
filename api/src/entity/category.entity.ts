import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Subcategory from "./subcategory.entity";


@Entity()

export default class Category extends AbstractEntity{
    @Column()
    categoryName: string;

    @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
    subcategory: Subcategory[];

}