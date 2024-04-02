import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get() // /user
    async findAll() {
        try {
            const data = await this.userService.findAll()
            if (data.length <= 0) {
                throw new NotFoundException('something wnet worng')
            }
            return data
        } catch (error: any) {
            console.log(error)
            throw new NotFoundException('something wnet worng')
        }
    }
    @Get(':id') // /user/:id    
    async findOne(@Param('id') id: string) {
        try{
            const data =await this.userService.findOne(id)
            if(!data){
                throw new NotFoundException('something wnet worng')
            }
            return data
        }catch(err){
            console.log(err)
            throw new NotFoundException('something wnet worng')
        }
    }
    @Post()   //user
    create(@Body() user: Prisma.UserCreateInput) {
        try{
            return this.userService.create(user)
        }catch(err){
            console.log(err)
            throw new NotFoundException('something wnet worng')
        }
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() user: Prisma.UserUpdateInput) {
        try{
            return this.userService.update(id, user)
        }catch(err){
            console.log(err)
            throw new NotFoundException('something wnet worng')
        }
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        try{
            return this.userService.delete(id)
        }catch(err){
            console.log(err)
            throw new NotFoundException('something wnet worng')
        }  
    }
}
