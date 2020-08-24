import { Injectable } from '@nestjs/common';
import { multiple } from '@shared/utils/exemplaryUtils';
import { Todo } from '@shared/types/todo';

@Injectable()
export class AppService {
  getHello(): { data: string } {
    return { data: `${multiple(Math.random() * 100)}` };
  }

  getTodo(): { data: Todo } {
    return { data: { id: 'a', text: 'b' } };
  }
}
