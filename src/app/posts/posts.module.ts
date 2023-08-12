import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { postReducer } from './store/posts.reducer';
import { PostComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from './store/postsEffect.effect';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([PostsEffect]),
  ],
  exports: [PostComponent],
  providers: [PostsService],
})
export class PostsModule {}
