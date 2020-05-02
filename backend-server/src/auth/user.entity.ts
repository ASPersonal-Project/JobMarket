import { Entity, Column, ObjectIdColumn, BaseEntity, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

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

    async validatePassword(password: string) {
        const isMatch = await bcrypt.compare(password, this.password)
        return isMatch;
    }
    
}