import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Sanitize } from 'src/utils';
import { getUserRule } from './user.rule';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Sanitize(getUserRule)
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
}
