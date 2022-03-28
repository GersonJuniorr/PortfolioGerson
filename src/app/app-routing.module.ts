import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home/home.component';
import { ProjectComponent } from './pages/project/components/project/project.component';

const routes: Routes = [
  {path: 'projects', component: ProjectComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
