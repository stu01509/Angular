import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site/site.component';
import { FoodComponent } from './food/food.component';
import { TrafficComponent } from './traffic/traffic.component';
import { ActivityComponent } from './activity/activity.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IGComponent } from './ig/ig.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'site', component: SiteComponent},
  {path: 'food', component: FoodComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'traffic', component: TrafficComponent},
  {path: 'igwall', component: IGComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [
  AboutComponent,
  SiteComponent,
  FoodComponent,
  TrafficComponent,
  ActivityComponent,
  IGComponent,
  NotFoundComponent,
];
