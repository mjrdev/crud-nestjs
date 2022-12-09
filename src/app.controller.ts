import { Controller, Post, Body } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUserBody } from './dtos/create-users-body';
import { UserRepository } from './repositories/user-repository';

@Controller('api')
export class AppController {
  constructor(
    private userRepository: UserRepository,
  ) {}

  @Post()
  async getHello(@Body() body: CreateUserBody) {
    const { name, email, password } = body;
    const user = await this.userRepository.create(name, email, password);

    return {
      user
    };
  }
}
