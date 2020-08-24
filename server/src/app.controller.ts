import { Controller, Get } from '@nestjs/common';
import { Todo } from '@shared/types/todo';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { data: string } {
    return this.appService.getHello();
  }

  @Get()
  getTodo(): { data: Todo } {
    return this.appService.getTodo();
  }
}
