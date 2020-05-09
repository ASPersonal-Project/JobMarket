import { Controller, Post, Body, UseGuards, Get, Param, Delete } from '@nestjs/common';
import { JobvacancyService } from './jobvacancy.service';
import { AddJobvacancyDto } from './dto/addJobVacancy.dto';
import { Jobvacancy } from './interface/jobvacancy.interface';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
import { User } from 'src/auth/interface/user.interface';

@Controller('jobvacancy')
// @UseGuards(AuthGuard())
export class JobvacancyController {
    constructor(
        private jobvacancyService:JobvacancyService,
    ){}
    @Post('/')
    createNotice(
        @Body() addJobvacancyDto:AddJobvacancyDto,
        @GetUser() user:User
        ):Promise<Jobvacancy>{
        return this.jobvacancyService.createNotice(addJobvacancyDto,user)
    }

    @Get('/')
    getAllNotice():Promise<Jobvacancy[]>{
        console.log('gtp');
        return this.jobvacancyService.getAllNotice();
    }

    @Get('/:id')
    getNoticeById(@Param() params){
        console.log(params.id)
        return this.jobvacancyService.getNoticeById(params.id);
    }

    @Delete('delete/:id')
    removeNotice(
        @Param() Params,
        @GetUser() user:User
        ):Promise<string>{
        
        return this.jobvacancyService.removeNotice(Params.id,user);
    }

    @Get('/ownernotice')
    getOwnerNotice(@GetUser() user:User):Promise<Jobvacancy>{
        return this.jobvacancyService.getOwnerNotice(user)
    }


}
