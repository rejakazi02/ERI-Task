import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '../app.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CrudService } from '../services/common/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.scss'],
})
export class DialogOverviewExampleDialogComponent {
  dataForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    private fb: FormBuilder,
    private router: Router,
    private crudService: CrudService
  ) {}
  //Dialog close function
  onNoClick(): void {
    this.dialogRef.close();
  }
  // /*Form validations*/
  // unameFormControl = new FormControl('', [Validators.required]);
  // phoneFormControl = new FormControl('', [Validators.required]);
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // pwdFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(8),
  // ]);
  // matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    // Init Form
    this.initDataForm();
  }

  private initDataForm() {
    this.dataForm = this.fb.group({
      name: [null],
      phone: [null],
      email: [null],
    });
  }

  onSubmit() {
    this.crudService.addCrud(this.dataForm.value).subscribe({
      next: (res) => {
        console.log("first", res)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
