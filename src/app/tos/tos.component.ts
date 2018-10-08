import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css']
})
export class TosComponent implements OnInit {
  termsMet: boolean = false;
  agreed: boolean = false;

  constructor(private router: Router) { }

  checkTOS() {
  	let terms = document.getElementById('terms');
  	this.termsMet = (terms.scrollTop + terms.offsetHeight) >= terms.scrollHeight
  }
  done() {
  	this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
