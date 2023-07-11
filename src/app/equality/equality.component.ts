import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css']
})
export class EqualityComponent {

  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber:new FormControl(this.generateNumber()),
      answer: new FormControl('')
    },
    [
      (form:AbstractControl) => {
        console.log(form.value);
        const {firstNumber,secondNumber,answer} = form.value;
        if(firstNumber + secondNumber === parseInt(answer)) {
          return null;
        }
        return {addition: true};
      }
    ]
  )

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }


  generateNumber() {
    return Math.floor(Math.random()*10);
  }

}
