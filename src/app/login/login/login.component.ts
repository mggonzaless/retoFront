import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private router: Router) {


  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
    
      this.router.navigate(['inicio'], { queryParams: { user: this.form.get('username')?.value } });
    }
  }

}
