import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(user: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: user
    })
  }

  async findAll() {
    return this.databaseService.user.findMany()
  }

  async findOne(id: string) {
    console.log(id)
    return this.databaseService.user.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id:string,user:Prisma.UserUpdateInput){
      return this.databaseService.user.update({
        where:{
          id:id
        },
        data:user
      })
  }
  async delete(id:string){
    return this.databaseService.user.delete({
      where:{
        id:id
      }
    })
  }
}
