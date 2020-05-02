import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { JobService } from './job.service';
import { AddJobDto } from './dto/addJob.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('job')
@UseGuards(AuthGuard())
export class JobController {
    constructor(
        private jobService : JobService,
    ) { }
    @Post('/')
    addJObVeconcy(
        @Body() addJobDto: AddJobDto,
        @GetUser() user: User
        ) {
        return this.jobService.addJobVeconcy(addJobDto,user);
    }
    @Get('/')
    fetchAllJobVacancy(){
        return this.jobService.allJobVacancy()
    }

    // @Get('/me')
    // fetchJobVeocncy(@GetUser() user:User){
    //     return this.jobService.getJobById(user);
    // }

}
