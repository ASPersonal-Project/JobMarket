import { Injectable } from '@nestjs/common';
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
    
}
