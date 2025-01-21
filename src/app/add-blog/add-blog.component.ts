import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { blog } from './blogsType.model';

@Component({
  selector: 'app-add-blog',
  imports: [FormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {

  blogs: blog[] = JSON.parse(localStorage.getItem('blogs') || '[]') ;

  blogInfo: blog = {
    id: 1,
    title: '',
    story:'',
    imageUrl:''
  }

  handleSubmit = () =>{
    console.log(this.blogInfo)
    if(this.blogInfo.title && this.blogInfo.story && this.blogInfo.imageUrl){
      this.blogInfo.id = this.blogs.length + 1
      this.blogs.push(this.blogInfo);
      localStorage.setItem('blogs', JSON.stringify(this.blogs))
      alert('Posted Successfully')
      this.blogInfo.title = ''
      this.blogInfo.story = ''
      this.blogInfo.imageUrl = ''
    }else{
      alert('fill empty fields')
    }
  }
}


