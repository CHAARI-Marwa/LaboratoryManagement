import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

  constructor(private MS : MemberService, private dialog : MatDialog){

  }


  dataSource : Member[]=[]


  //se load avant le constructeur
  ngOnInit():void
  //injection de dependances : me permet d'utiliser le service dans les composants ou dans le s autres services
  //elle consiste a crere une instance privé du service dans le constructeur du composant 
  {
    //appeler la fonction du service getAllMembers
    //attendere le resultat
    //une fois on recoit le res => l'affecter dans datasource
    this.MS.getAllMembers().subscribe((/*le retour va etre stocké ici dans cette variable*//*tkhdem ken houni n'est pas visible à l'exterieur*/ response)=>{
      /*une fois t3abet variable chnou naaml post action post resultat*/
      this.dataSource=response
    })
  }

  delete(id:string):void{
    //1.lancer la boite(confirmcomponent)
    const dialogref=this.dialog.open(ConfirmComponent);
    //apres l'ouverture je reste subscriber et attendre la reponse de delete
    //2.attendre le resu de l'user
    dialogref.afterClosed().subscribe((response)=>{
      if (response)
    

    //3. si l'util a fait le click sur confirm
    this.MS.deleteMember(id).subscribe(()=>{
      //action apres avoir éfacer
      this.MS.getAllMembers().subscribe((response)=>{
        this.dataSource=response
      })
    })
  })
  }

  displayedColumns: string[] = ['ID', 'CIN', 'Name', 'CV', 'Type', 'createDate', 'edit', 'delete'];

}
