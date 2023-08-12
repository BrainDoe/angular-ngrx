import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './posts/components/posts/posts.component';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: PostComponent }])],
  exports: [RouterModule],
})
export class AppRooutingModule {}
