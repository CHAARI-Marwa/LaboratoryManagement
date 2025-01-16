import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute){}
  idcourant!: string;
  form!: FormGroup; //on a initialiser qq que soit le type de variable avec "!"

  //creation de objet de type form groupe fih les 4 types envoyés par le formulaire 

  ngOnInit(){
      //1. recuperer la route active de la page
      this.idcourant =this.activatedRoute.snapshot.params['id']
      console.log(this.idcourant)

      //2. if id existe et a une valeure => je suis dans edit 
      if(!!this.idcourant){this.MS.getMemberById(this.idcourant).subscribe((member)=>{
        this.form=new FormGroup({
          yourfieldname:new FormControl(),
          cin: new FormControl(member.cin,[Validators.required]),
          name: new FormControl(member.name,[Validators.required]),
          cv: new FormControl(member.cv,[Validators.required]),
          type: new FormControl(member.type,[]),
        })
      })
      }
      else{
        //3. sinon je suis dan create
        this.initForm();
      }
  }

   initForm():void{
    //creation d'une nouvelle instance de form et initialisation des produits
    this.form=new FormGroup({
      cin: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required]),
      cv: new FormControl(null,[Validators.required]),
      type: new FormControl(null,[]),
    })
  }

  sub():void{
    // console.log(this.form.value)
    if(!!this.idcourant){
      //recuperer les donnée de form
      const member={...this.form.value,createDate:new Date().toISOString()}
      this.MS.updateMember(member,this.idcourant).subscribe(()=>{
      this.router.navigate(['/member'])
    })}
    else{
      const member={...this.form.value,createDate:new Date().toISOString()}
      this.MS.add(member).subscribe(()=>{
        this.router.navigate(['/member'])
      })
  }}
  

}
