import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../store/posts.action';
import {
  isLoadingSelector,
  postsSelector,
  errorSelector,
} from '../../store/posts.selector';
import { AppState } from '../../store/app-state.state';
import { Ipost } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-post',
  template: `
    <div *ngIf="isLoading$ | async">Loading...</div>
    <div>
      <ul *ngFor="let posts of posts$ | async">
        <li>{{ posts.id }}</li>
        <li>{{ posts.title }}</li>
      </ul>
    </div>
  `,
  styles: [],
})
export class PostComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$!: Observable<Ipost[]>;
  error$!: Observable<string | null>;

  constructor(private store$: Store<AppState>) {
    this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
    this.posts$ = this.store$.pipe(select(postsSelector));
    this.error$ = this.store$.pipe(select(errorSelector));
  }

  ngOnInit() {
    this.store$.dispatch(PostActions.getPosts());
  }
}
