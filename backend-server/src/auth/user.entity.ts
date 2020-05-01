import { Entity, Column, ObjectIdColumn, BaseEntity, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class User extends BaseEntity{
    @ObjectIdColumn()
    _id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
}