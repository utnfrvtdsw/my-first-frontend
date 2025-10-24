import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, NgIf, NgFor, NgSwitch],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  ngOnInit() {
    console.log('UserComponent initialized');
  }

  ngOnDestroy() {
    console.log('UserComponent destroyed');
  }


  name = 'Gustavo';

  user = '';
  
  password = '';

  isVisible = false;

  message = '';

  menus = ['Home', 'About', 'Contact', 'Services'];

  onClick() {
    this.isVisible = this.user === this.password ? true : false;
  }

}
