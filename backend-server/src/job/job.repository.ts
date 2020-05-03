import { MongoRepository, EntityRepository } from "typeorm";
import { Job } from "./job.entity";
import { AddJobDto } from "./dto/addJob.dto";
import { typeOrmConfig } from "src/config/typeorm.config";
import { User } from "src/auth/user.entity";
import { userInfo } from "os";

@EntityRepository(Job)
export class JobRepository extends MongoRepository<Job>{
    async addJob(addJobDto: AddJobDto,user:User):Promise<Job> {
        const { title, position, description } = addJobDto;
        console.log(user);

        const job = new Job();
        job.title = title;
        job.position = position;
        job.description = description;
        job.user = user._id;
        try {
            await job.save();

            return job;
        } catch (error) {
            console.log(error)
        }
    }
    async allJobVacancy(){
        try {
            return await this.findOne({relations:["user"]});
        } catch (error) {
            console.log(error);
        }
    }

    // async getJobById(user:User):Promise<Job[]>{
    //     try {
    //         return await (await this.find({userId:user._id}))
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
}