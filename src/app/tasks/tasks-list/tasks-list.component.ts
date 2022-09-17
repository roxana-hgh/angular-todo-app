import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.module';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];


  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks()
    
  }

  toggleDone(index: number) {
    this.tasksService.toggleDone(index)
  }

  onDeleteTask(index: number){
    this.tasksService.deleteTask(index)

  }

  

}
