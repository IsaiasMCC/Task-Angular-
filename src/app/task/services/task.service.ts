import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: Task[] = [
  ];

  private _dones: Task[] = [
  ];
  private _todos: Task[] = [];

  _drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this._tasks, event.previousIndex, event.currentIndex);
  }
  _dropped(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() { }

  get tasks(): Task[] {
    return this._tasks;
  }
  get dones(): Task[] {
    return this._dones;
  }
  get todos() : Task[] {
    return this._todos;
  }

  addTask(task: Task): void {
    this._tasks.push(task);
  }

}
