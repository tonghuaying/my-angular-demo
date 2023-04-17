import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MyValidators {
  static cannotContainSpace (control : AbstractControl): ValidationErrors | null {
    if (/\s/.test(control.value)) {
      return {
        cannotContainSpace: true
      }
    }
    return null
  }
}