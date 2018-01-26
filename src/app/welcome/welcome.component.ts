import { Component, OnInit, } from '@angular/core';
  import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

constructor(private _router:Router) { }
backMethod(event):void{
  this._router.navigate(['/welcome']);
  console.log(event);
}
  ngOnInit() {
    console.log('in Oninit');
  }

}
