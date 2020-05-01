import { BaseEntity, ObjectIdColumn, Column, Entity } from "typeorm";

@Entity()
export class Job extends BaseEntity{
    @ObjectIdColumn()
    _id: string;

    @Column()
    title: string;

    @Column()
    position: string;

    @Column()
    description: string;
}