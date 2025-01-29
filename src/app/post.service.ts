import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient)
  url = "https://jsonplaceholder.typicode.com/posts"


  constructor() { }

  getPost(){
    return this.http.get<Post[]>(this.url)
  }

  getPostById(){
    return this.http.get<Post>(this.url + '/1')
  }

  createPost(data: Post){
    return this.http.post<Post>(this.url, data)
  }
}
