import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '../users/users.module';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [ UsersModule, PassportModule, UsersService ],
    providers: [ AuthenticationService, LocalStrategy ],
    controllers: [ AuthenticationController, AuthenticationController ]
})
export class AuthenticationModule { }