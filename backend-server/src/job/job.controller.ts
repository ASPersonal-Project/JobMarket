import { Controller, Post, Body } from '@nestjs/common';
import { JobService } from './job.service';
import { AddJobDto } from './dto/addJob.dto';

@Controller('job')
export class JobController {
    constructor(
        private jobService : JobService,
    ) { }
    @Post('/')
    addJOb(@Body() addJobDto: AddJobDto) {
        return this.jobService.addJob(addJobDto);
    }
}
