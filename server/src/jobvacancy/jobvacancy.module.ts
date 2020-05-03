import { Module } from '@nestjs/common';
import { JobvacancyController } from './jobvacancy.controller';
import { JobvacancyService } from './jobvacancy.service';
import { JObvacancyRepository } from './jobvacancy.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { jobvacancySchema } from './schema/jobvacancy.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Jobvacancy',schema:jobvacancySchema}]),
    AuthModule
  ],
  controllers: [JobvacancyController],
  providers: [JobvacancyService,JObvacancyRepository]
})
export class JobvacancyModule {}
