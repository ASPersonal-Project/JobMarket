import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose';
import { JobvacancyModule } from './jobvacancy/jobvacancy.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/JobMarket",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }),
    AuthModule,
    JobvacancyModule
  ],
  
})
export class AppModule {}
