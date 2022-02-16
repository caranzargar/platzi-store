import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(
        @Query('limit') limit: number = 200, 
        @Query('offset') offset: number = 20){
            return `Users: limit => ${limit}, offset => ${offset}`
    }

    @Get('filter')
    getUserFilter(){
            return `Filtro de Users`
    }

    @Get(':userId')
    getUser(
        @Param('userId') userId: string
    ) {
        return `User ID: ${userId}`
    }
}
