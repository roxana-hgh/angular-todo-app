import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './tasks.module';


@Injectable()
export class TasksService {
  selectedTask = new Subject<number>()
  
  Tasks: Task[] = [
    
  ];

  constructor() {}

  getTasks(){
    return this.Tasks;
  }
  getTask(id: number) {
    return this.Tasks[id]
  }

  toggleDone(id: number){
    let theTask = this.Tasks[id]
    theTask.done = !theTask.done
  }
  
  deleteTask(id: number){
    this.Tasks.splice(id,1)
  }

  addTask(task: Task){
    this.Tasks.push(task)

  }
  
  editTask(id:number, newTask:Task){
    this.Tasks[id] = newTask;
  }
}