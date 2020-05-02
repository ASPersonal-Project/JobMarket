import { BaseEntity, ObjectIdColumn, Column, Entity, ManyToOne, ObjectID } from "typeorm";
import { User } from "src/auth/user.entity";
import { type } from "os";

@Entity()
export class Job extends BaseEntity{
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;

    @Column()
    position: string;

    @Column()
    description: string;

   @ManyToOne(type =>User,user => user.jobs)
    user:ObjectID;
}