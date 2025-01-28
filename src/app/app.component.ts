import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  name:string = 'May Cohort';
  myName = 'Damilare';
  students:string[] = ['Femi', 'John', 'Ade']
  isSuccess = true
  sqi_link:string = 'http://edu.sqi.ng'
  allowBtn = true
  font_size = '20px'
  displayInput = ''
  agree = false

  blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      author: "John Doe",
      content: "JavaScript is a versatile language used for both front-end and back-end development...",
      publishedDate: "2025-01-15",
      image: "https://via.placeholder.com/300?text=JavaScript"
,
    },
    {
      id: 2,
      title: "Understanding React Components",
      author: "Jane Smith",
      content: "React components are the building blocks of any React application...",
      publishedDate: "2025-01-10",
      image: "https://example.com/images/react-components.jpg",
    },
    {
      id: 3,
      title: "A Guide to Node.js Performance",
      author: "Mike Johnson",
      content: "Optimizing Node.js performance involves managing memory, asynchronous operations, and more...",
      publishedDate: "2025-01-05",
      image: "https://example.com/images/nodejs-performance.jpg",
    },
    {
      id: 4,
      title: "CSS Tips and Tricks for Developers",
      author: "Emily Brown",
      content: "CSS can seem tricky at first, but with these tips, you’ll master layout and styling in no time...",
      publishedDate: "2025-01-03",
      image: "https://example.com/images/css-tips.jpg",
    },
    {
      id: 5,
      title: "Introduction to Web Accessibility",
      author: "Chris Wilson",
      content: "Web accessibility ensures that your site is usable by everyone, including people with disabilities...",
      publishedDate: "2025-01-01",
      image: "https://example.com/images/web-accessibility.jpg",
    }
  ];


  userInfo = {
    fullname: '',
    email: '',
    password: '',
    agreeToTerms: false
    }


  listOfClasses = {
    "text-danger": !this.isSuccess,
    "text-success": this.isSuccess,
    "text-style": !this.isSuccess
  }

  displayName(val: string) {
    this.myName = val
  }

  handleSubmit(){
    console.log('Info:', this.userInfo);

  }

  // handleWriting(e: any){
  //   let val = e.target as HTMLInputElement
  //   this.displayInput = val.value
  // }


  items:string[] = []
  message = ''

  handleMessage(message:string){
    this.message = message
  }

  addItem(item: string) {
    this.items.push(item);
    console.log(this.items);

  }
}
