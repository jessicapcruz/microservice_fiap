import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss']
})
export class ContentAddComponent implements OnInit {
  nomeFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  subjects = new FormControl();
  subjectList: string[] = ['Artificial Intelligence', 'Banco de Dados', 'Big Data', 'cloud', 'Internet of Things', 'Programação'];

  constructor() {
   }

  ngOnInit(): void {
  }

}
