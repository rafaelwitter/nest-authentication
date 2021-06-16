import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rafaelwitt:hahahehe1@cluster0.z70v3.mongodb.net/users?retryWrites=true&w=majority'),
    UsersModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
