import { Injectable, NotFoundException } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { EntityRepository } from 'typeorm';
import { AddJobDto } from './dto/addJob.dto';
import { User } from 'src/auth/user.entity';
import { Job } from './job.entity';

@Injectable()
export class JobService {
    constructor(
        @EntityRepository(JobRepository)
        private jobRepository: JobRepository,
    ) { }
    addJobVeconcy(addJobDto: AddJobDto,user:User):Promise<Job> {
        return this.jobRepository.addJob(addJobDto,user);
    }
    allJobVacancy(){
        const vacancies =  this.jobRepository.allJobVacancy();
        console.log(vacancies);
        if(!vacancies) throw new NotFoundException('No Job Vacancy')
        return vacancies;
    }
    // getJobById(user:User):Promise<Job[]>{
    //     return this.jobRepository.getJobById(user);
    // }
}
