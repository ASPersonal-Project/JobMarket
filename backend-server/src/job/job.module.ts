import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRepository } from './job.repository';
import { jwtStraregy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([JobRepository]),
    AuthModule
  ],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
