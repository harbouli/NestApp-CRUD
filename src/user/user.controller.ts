import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { createUserDto } from './dtos/CreateUser.dto';
import { UserService } from './services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getusers(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const user = this.userService.findUserByID(id);
    console.log(typeof id);
    if (user) {
      res.send(user);
    } else {
      res.status(400).send({ msg: 'User not found' });
    }
  }
  @Get('search/:id')
  searchUser(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findUserByID(id);
    if (user) return user;
    else throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
  }
  @Get('')
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  createUser(@Body() createUserDto: createUserDto) {
    console.log(createUserDto);
    this.userService.createUser(createUserDto);
  }
}
