import { Injectable } from '@nestjs/common';
import { TaskModal, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: TaskModal[] = [];

  getAllTasks(): TaskModal[] {
    return this.tasks;
  }

  crateTask(createTaskDTO: CreateTaskDTO): TaskModal {
    const { title, description } = createTaskDTO;
    const task: TaskModal = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.DONE,
    };

    this.tasks.push(task);

    return task;
  }
}
