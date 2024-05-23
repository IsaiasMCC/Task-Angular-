import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskPageComponent } from "./task/pages/task-page/task-page.component";
import { ProjectPageComponent } from "./task/pages/project-page/project-page.component";
import { HomePageComponent } from "./task/pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskPageComponent
  },
  {
    path: 'projects',
    component: ProjectPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
