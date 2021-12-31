import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl  } from '@angular/forms';
import { UserAddRequest } from '../../models/request/user-add-request';

import { UserService } from '../../services/user.service';
import Validation from '../../validators/validation';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      gender: [null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm_password: [null, [Validators.required]],
    },
    {
      validators: [Validation.match('password', 'confirm_password')]
    });
  }

  /** Events */
  //On Ready DOM event
  ngOnInit(): void {

  }

  //On submit user data event
  OnSubmitData(form: any) {
    if (form.invalid) {
      let request : UserAddRequest =  new UserAddRequest(
        form.value.name,
        form.value.name,
        form.value.email,
        form.value.password,
        form.value.gender
      );

      this.userService.register(request);
    }

  }

  //Reset form event
  onReset(): void {
    this.userForm.reset();
  }

  /** Functions */
  //Get instatiated formGroup
  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

}
