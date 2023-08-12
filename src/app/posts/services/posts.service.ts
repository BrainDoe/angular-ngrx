import { Injectable } from '@angular/core';
import { Ipost } from '../interfaces/posts.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class PostsService {
  constructor() {}

  getPosts(): Observable<Ipost[]> {
    const posts = [
      { id: 1, title: 'One' },
      { id: 2, title: 'Two' },
      { id: 3, title: 'Three' },
    ];

    return of(posts).pipe(delay(3000));
  }
}
