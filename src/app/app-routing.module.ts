import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UIComponent } from './components/ui/ui.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'general',
  component: UIComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
