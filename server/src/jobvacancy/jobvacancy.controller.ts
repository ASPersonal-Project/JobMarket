import { Controller, Post, Body, UseGuards, Get, Param, Delete } from '@nestjs/common';
import { JobvacancyService } from './jobvacancy.service';
import { AddJobvacancyDto } from './dto/addJobVacancy.dto';
import { Jobvacancy } from './interface/jobvacancy.interface';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
import { User } from 'src/auth/interface/user.interface';

@Controller('jobvacancy')
@UseGuards(AuthGuard())
export class JobvacancyController {
    constructor(
        private jobvacancyService:JobvacancyService,
    ){}
    @Post('/')
    addJobvacancy(
        @Body() addJobvacancyDto:AddJobvacancyDto,
        @GetUser() user:User
        ):Promise<Jobvacancy>{
        return this.jobvacancyService.addJobvacancy(addJobvacancyDto,user)
    }
    @Get('/')
    getJobvacancy():Promise<Jobvacancy[]>{
        return this.jobvacancyService.getJobvacancy();
    }

    @Delete(':id')
    removeJobvacancy(
        @Param() Params,
        @GetUser() user:User
        ){
        
        return this.jobvacancyService.removeNotice(Params.id,user);
    }

    @Get('/ownernotice')
    getOwnerNotice(@GetUser() user:User):Promise<Jobvacancy>{
        return this.jobvacancyService.getOwnerNotice(user)
    }
}
