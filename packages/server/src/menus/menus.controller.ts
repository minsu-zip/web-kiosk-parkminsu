import { Controller, Get, Param } from '@nestjs/common'
import { MenusService } from './menus.service'

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menusService.findOne(+id)
  }
}
