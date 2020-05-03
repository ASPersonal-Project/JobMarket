import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Jobvacancy } from './interface/jobvacancy.interface';
import { AddJobvacancyDto } from './dto/addJobVacancy.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { User } from 'src/auth/interface/user.interface';
export class JObvacancyRepository{
    constructor(
        @InjectModel('Jobvacancy')
        private jobvacacyModel:Model<Jobvacancy>
    ){}
    async addJobvacancy(addJobvacancyDto:AddJobvacancyDto,user:User):Promise<Jobvacancy>{
        const {company,title,description} = addJobvacancyDto;
        const jobvacancy = new this.jobvacacyModel({
            user:user._id,
            company,
            title,
            description
        })
        try {
            return await jobvacancy.save();
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException();
        }
    }
}