import { MongoRepository, EntityRepository } from "typeorm";
import { Job } from "./job.entity";
import { AddJobDto } from "./dto/addJob.dto";
import { typeOrmConfig } from "src/config/typeorm.config";

@EntityRepository(Job)
export class JobRepository extends MongoRepository<Job>{
    async addJob(addJobDto: AddJobDto) {
        const { title, position, description } = addJobDto;

        const job = new Job();
        job.title = title;
        job.position = position;
        job.description = description;
        try {
            await job.save();
        } catch (error) {
            console.log(error)
        }
    }
    
}