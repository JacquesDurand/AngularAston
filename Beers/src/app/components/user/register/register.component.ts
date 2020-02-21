import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  form: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      firstname: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!$@#]{6,20}')]],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  onSubmit(): void {
    console.log(this.form.value);
    const u = this.form.value as UserModel
    console.log(u);

    this.userService.registerUser(u).subscribe((data: UserModel) => {
      console.log(data);

    })
  }

}
