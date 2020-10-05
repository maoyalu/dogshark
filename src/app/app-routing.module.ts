import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UIComponent } from './components/ui/ui.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'general',
  component: UIComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
