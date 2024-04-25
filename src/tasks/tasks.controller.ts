import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModal } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {
  }

  @Get()
  getAllTasks(): TaskModal[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): TaskModal {
    return this.taskService.crateTask(createTaskDTO);
  }
}
