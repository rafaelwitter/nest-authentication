import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

// IMPORT PARA USER.ENTITY
import User from './user.entity';

// IMPORT PARA USER WITH SCHEMA
// import { User, UserDocument, UserSchema } from './schemas/user.schema';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
 
@Injectable()
export class UsersService {
 // USER.ENTITY
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

 // USER && USER.SCHEMA
  // constructor(
  //   @InjectModel(User.name)
  //   private usersRepository: Model<User>
  // ) {}
 

 // ESTA COMENTADO PQ DA CONFLITO ENTRE ENTITY E SCHEMA
  // async getById(id: number) {
  //   const user = await this.usersRepository.findOne({ id });
  //   if (user) {
  //     return user;
  //   }
  //   throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  // }
 
  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
 
  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    // await this.usersRepository.save(newUser);
    return newUser;
  }

  async findAll() {
    return await this.usersRepository.find()
  }
}