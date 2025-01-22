import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { blog } from './blogsType.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  imports: [FormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {

  blogs: blog[] = []

  ngOnInit(){
    this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
  }


  blogInfo: blog = {
    id: 1,
    title: '',
    story:'',
    imageUrl:''
  }

  resetInput(){
    this.blogInfo = {
      id: 1,
      title: '',
      story: '',
      imageUrl: ''
    }
  }

  handleSubmit = () =>{
    console.log(this.blogInfo)
    if(this.blogInfo.title && this.blogInfo.story && this.blogInfo.imageUrl){

      this.blogInfo.id = Math.floor(Math.random() * 1000000)
      this.blogs.push(this.blogInfo);
      console.log(this.blogs);

      localStorage.setItem('blogs', JSON.stringify(this.blogs))
      alert('Posted Successfully')

      this.resetInput()

    }else{
      alert('fill empty fields')
    }
  }
}


