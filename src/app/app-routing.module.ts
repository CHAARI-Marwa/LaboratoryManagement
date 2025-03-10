import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ToolsFormComponent } from './tools-form/tools-form.component';
import { FormEtdComponent } from './form-etd/form-etd.component';

const routes: Routes = [
  { 
    path: 'publications', 
    component: FormEtdComponent
  },
  { 
    path: 'etudiants/:id/edit', 
    component: FormEtdComponent 
  },
  {
    path:'create-enseignant',
    pathMatch:"full",
    component:MemberFormComponent
  },
  { 
    path: 'enseignants/:id/edit', 
    component: MemberFormComponent 
  },
  { 
    path: 'create-etudiant', 
    component: FormEtdComponent
  },
  { 
    path: 'tools/new', 
    component: ToolsFormComponent
  },
  { 
    path: 'tools/edit/:id',
    component: ToolsFormComponent 
  },
  {
    path : 'dashboard',
    pathMatch: 'full',
    component:DashboardComponent
  },
  {
    path : 'member',
    pathMatch: 'full',
    component:MemberComponent
  },
  {
    path : 'tools',
    pathMatch: 'full',
    component:ToolsComponent
  },
  {
    path : 'articles',
    pathMatch: 'full',
    component:ArticlesComponent
  },
  {
    path : 'events',
    pathMatch: 'full',
    component:EventsComponent
  },
  {
    path : ':id/edit', //la valeur de id est c'est dynamique car avant elle il y'a : c pas statique
    pathMatch: 'full',
    component:MemberFormComponent},
  {
    path : 'create-etudiant',
    pathMatch: 'full',
    component:MemberFormComponent},
  {
    path : '',
    pathMatch: 'full',
    component:LoginComponent},
  {
    path : '**',
    component:MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
