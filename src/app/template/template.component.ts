import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{
  displayelements=false;
  constructor(private AS: AuthService, private router:Router, private a:ActivatedRoute){
  }

  isNotRoot: boolean = false;
  isRoot: boolean = false;

  ngOnInit(): void {
    // Écouter les événements de navigation et filtrer pour NavigationEnd
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Met à jour la variable en fonction de l'URL
        this.isNotRoot = this.router.url !== '/';
        this.isRoot = this.router.url === '/';
        console.log(this.isNotRoot);
      }
    });
  }

  // ngOnInit(): void{
  //   if (this.router.url != '/'){
  //     this.displayelements = true;
  //   }
  //   else{
  //     this.displayelements = false;
  //   }
  //   console.log(this.displayelements,this.router.url)
  // }

  signout():void{
    this.AS.doLogout().then(()=>{
      this.router.navigate([''])
    })
  }

}
