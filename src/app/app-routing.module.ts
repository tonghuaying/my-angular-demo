import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { InndustryComponent } from './pages/inndustry/inndustry.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about/:name',
    component: AboutComponent,
    canActivate: [ AuthGuardGuard ]
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'industry',
        component: InndustryComponent
      }
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
