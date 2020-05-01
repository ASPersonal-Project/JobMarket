import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { EntityRepository } from 'typeorm';
import { AddJobDto } from './dto/addJob.dto';

@Injectable()
export class JobService {
    constructor(
        @EntityRepository(JobRepository)
        private jobRepository: JobRepository,
    ) { }
    addJob(addJobDto: AddJobDto) {
        return this.jobRepository.addJob(addJobDto);
    }
}
