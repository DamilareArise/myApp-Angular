import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post, PostService } from '../post.service';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  postService = inject(PostService)


  // blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  blogs: Post[] = []
  constructor() { 
    this.postService.getPost().subscribe({
      next: (data) => {
        this.blogs = data
      },
      error: (error) => {
        console.log(error)
      }
    })

  }
}
