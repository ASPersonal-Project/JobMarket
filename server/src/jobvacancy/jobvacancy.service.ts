import { Injectable, NotFoundException } from '@nestjs/common';
import { JObvacancyRepository } from './jobvacancy.repository';
import { AddJobvacancyDto } from './dto/addJobVacancy.dto';
import { Jobvacancy } from './interface/jobvacancy.interface';
import { User } from 'src/auth/interface/user.interface';

@Injectable()
export class JobvacancyService {
    constructor(
        private jobvacancyRepository:JObvacancyRepository,
    ){}

    addJobvacancy(addJobvacancyDto:AddJobvacancyDto,user:User):Promise<Jobvacancy>{
        return this.jobvacancyRepository.addJobvacancy(addJobvacancyDto,user);
    }

    getJobvacancy():Promise<Jobvacancy[]>{
        return this.jobvacancyRepository.getJobvacancy();
    }

    async removeNotice(id:string,user:User){
        return await this.jobvacancyRepository.removeNotice(id,user);
       
    }

    getOwnerNotice(user:User):Promise<Jobvacancy>{
        const ownerNotice = this.jobvacancyRepository.getOwnerNotice(user);
        if(!ownerNotice) throw new NotFoundException('This not have a your notice');
        return ownerNotice;
    }
    
}
