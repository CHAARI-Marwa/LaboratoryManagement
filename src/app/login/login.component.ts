import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private AS: AuthService, private router:Router){

  }

  signin():void{
    this.AS.doGoogleLogin().then(()=>{
      this.router.navigate(['/member'])
    })
  }

}
