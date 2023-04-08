import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../app.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.scss']
})
export class DialogOverviewExampleDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>) {}
  //Dialog close function 
  onNoClick(): void {
    this.dialogRef.close();
  }
   /*Form validations*/
   unameFormControl = new FormControl('', [
    Validators.required,   
    ]);
    phoneFormControl = new FormControl('', [
      Validators.required,   
      ]);
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    pwdFormControl = new FormControl('', [
      Validators.required,   
      Validators.minLength(8),
    ]);  
    matcher = new MyErrorStateMatcher();
}
