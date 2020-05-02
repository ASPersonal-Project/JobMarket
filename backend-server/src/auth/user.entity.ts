import { Entity, Column, ObjectIdColumn, BaseEntity, Unique, OneToMany,ObjectID } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Job } from "src/job/job.entity";
import { type } from "os";



@Entity()
@Unique(['email'])
export class User extends BaseEntity{
    @ObjectIdColumn()
    _id:ObjectID;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Job, job => job.user)
    jobs: Job[]

    async validatePassword(password: string) {
        const isMatch = await bcrypt.compare(password, this.password)
        return isMatch;
    }
    
}