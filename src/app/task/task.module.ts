import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './pages/task-page/task-page.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TextValidatorComponent } from './components/text-validator/text-validator.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    TaskPageComponent,
    TextValidatorComponent,
    ProjectPageComponent,
    HomePageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TaskPageComponent,
    NavigationComponent
  ]
})
export class TaskModule { }
