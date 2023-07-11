import { AbstractControl } from '@angular/forms';


export class EqualityValidators {

    static addition(form:AbstractControl) {
        // console.log(form.value);
        const {firstNumber,secondNumber,answer} = form.value;
        if(firstNumber + secondNumber === parseInt(answer)) {
          return null;
        }
        return {addition: true};
    }
}
