import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],

})
export class BasicsComponent  {

  name=new FormControl('');

  updateValue()
  {
    this.name.setValue("Ashraf Ali")

  }

}

