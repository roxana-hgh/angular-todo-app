import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../tasks.module';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task !: Task;
  id !: number;
  test = 'test'

  constructor(private taskService: TasksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.taskService.selectedTask.subscribe(
    //   (id: number) => {
    //     this.task = this.taskService.getTask(id)
    //   }
    // )

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.task = this.taskService.getTask(this.id);
    });

    
    
    
    
  }

  onEdit(form: NgForm){
    let updatedtask = new Task(form.value.name, form.value.description, this.task.done)
    this.taskService.editTask(this.id, updatedtask)
    
  }

  toggleDone() {
    this.taskService.toggleDone(this.id)
  }

}
