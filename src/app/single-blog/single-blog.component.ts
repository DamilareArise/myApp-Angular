import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../add-blog/blogsType.model';

@Component({
  selector: 'app-single-blog',
  imports: [],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent {
  id:number|any ;

  // route = inject(ActivatedRoute)
  blogs: blog[] = JSON.parse(localStorage.getItem('blogs') || '[]')
  router:any
  // router = inject(Router)
  blog:blog|undefined

  ngOnInit(){
    this.blog = this.blogs.find((blog:blog)=>{
      return blog.id == this.id
    })

  }

  constructor(private route: ActivatedRoute, router: Router ){
    // this.id = this.route.snapshot.params['id'];
    this.router = router
    this.route.params.subscribe((params)=>{
      this.id = params['id']
    })

  }


  deleteBlog(){
    this.blogs = this.blogs.filter((blog:blog)=>blog.id != this.id)
    localStorage.setItem('blogs', JSON.stringify(this.blogs))
    this.router.navigate([''])

  }

}
