import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,NgClass,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name: string = "SIMPSONS";
  firstname: string = "Homer";
  imageSrc: string ="assets/card.png";
  quote =" ";
  show = false;
  age= 35;

}
