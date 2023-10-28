import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from './views/poster/poster.component';
import { PostersComponent } from './views/posters/posters.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostersComponent
  },
  {
    path: 'poster/:id',
    component: PosterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
