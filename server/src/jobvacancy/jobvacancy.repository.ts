import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Jobvacancy } from './interface/jobvacancy.interface';
import { AddJobvacancyDto } from './dto/addJobVacancy.dto';
import { InternalServerErrorException, NotFoundException, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
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
    async getJobvacancy():Promise<Jobvacancy[]>{
        try {
            return await this.jobvacacyModel.find().sort({date:-1});
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async removeNotice(id:string,user:User){
        const jobvacancy = await this.jobvacacyModel.findById(id);
        if(!jobvacancy) throw new NotFoundException('Your advertice not found');
        if(jobvacancy.user.toString() !== user._id.toString()) throw new UnauthorizedException('You are not auterized')
        try {
            jobvacancy.remove();
        } catch (error) {
            throw new InternalServerErrorException();
        }
       
    }
    async getOwnerNotice(user:User):Promise<Jobvacancy>{
        try {
            return this.jobvacacyModel.find({user:user._id});
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    
}