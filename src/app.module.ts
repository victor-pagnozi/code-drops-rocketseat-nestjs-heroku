import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://victorpagnozi:victor160596@victordropc.4rnpg.mongodb.net/test',
  ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
