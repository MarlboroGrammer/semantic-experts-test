import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  open: boolean = false;
  constructor(private formBuilder: FormBuilder,
  			  private authenticationService: AuthenticationService,
  			  private router: Router
  			 ) { }

  ngOnInit() {
  	this.submitted = false;
  	this.loginForm = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    });
  }
  //Facilite l'access au champs de formulaire
  get f() { return this.loginForm.controls; }

  onSubmit() {
  	this.submitted = true;
  	//arret de l'execution en cas d'erreur
  	if (this.loginForm.invalid) {
        return;
    }
  	this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/tos']);
        },
        error => {
        	console.log(error)
        });
  }
}
