import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UpdateUserDTO, UserDTO } from './dto/user.dto';
import { ListUserService } from './services/list.user.service';
import { FindUserService } from './services/find.user.service';
import { CreateUserService } from './services/create.user.service';
import { UpdateUserService } from './services/update.user.service';
import { DeleteUserService } from './services/delete.user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly listUserService: ListUserService,
    private readonly findUserService: FindUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService
  ) {}

  @Post()
  async create(@Body() data: UserDTO): Promise<void> {
    await this.createUserService.execute(data);
  }

  @Get()
  async list(): Promise<UserDTO[]> {
    return this.listUserService.execute();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserDTO> {
    return this.findUserService.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDTO
  ): Promise<void> {
    await this.updateUserService.execute(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteUserService.execute(id);
  }
}
