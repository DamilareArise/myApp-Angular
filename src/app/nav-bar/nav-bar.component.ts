import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() username = ''

  @Output() addItemEvent = new EventEmitter<string>();

  @Output() sendMessageEvent = new EventEmitter<string>();


  sendMessage(){
    this.sendMessageEvent.emit('Hello, from nav bar component')
  }

  handleClick(){
    this.addItemEvent.emit('Hello')
  }
}
