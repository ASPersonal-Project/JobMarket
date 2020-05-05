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

    createNotice(addJobvacancyDto:AddJobvacancyDto,user:User):Promise<Jobvacancy>{
        return this.jobvacancyRepository.createNotice(addJobvacancyDto,user);
    }

    getAllNotice():Promise<Jobvacancy[]>{
        return this.jobvacancyRepository.getAllNotice();
    }

    getNoticeById(id:string){
        const notice = this.jobvacancyRepository.getNoticeById(id);
        if(!notice) throw new NotFoundException();
        return notice;
    }

    async removeNotice(id:string,user:User):Promise<string>{
        return await this.jobvacancyRepository.removeNotice(id,user);
       
    }

    getOwnerNotice(user:User):Promise<Jobvacancy>{
        const ownerNotice = this.jobvacancyRepository.getOwnerNotice(user);
        if(!ownerNotice) throw new NotFoundException('This not have a your notice');
        return ownerNotice;
    }
    
}
