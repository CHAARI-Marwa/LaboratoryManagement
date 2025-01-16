import { Component, OnInit } from '@angular/core';
import { Evt } from 'src/models/evt';
import { EventService } from 'src/services/event.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  constructor(private ES : EventService, private dialog:MatDialog){

  }

  eventSource : Evt[]=[]

  ngOnInit(): void {
    this.ES.getAllEvent().subscribe((response)=>{
      this.eventSource=response
    })
  }

  open(): void{
    const dialogRef = this.dialog.open(ModalComponent, {  
    });
    // récuperer les donnée du modal
    dialogRef.afterClosed().subscribe((data)=>{
      if (data==null){
        return;
      }
      this.ES.addEvent(data).subscribe(()=>{
        this.ES.getAllEvent().subscribe((response)=>{
          this.eventSource=response
        })
      })
    })
  }

  openid(id: string):void{
    //lancer l'ouverture 
   
    //envoyer id vers model
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id};

    const dialogRef=this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
      this.ES.update(data,id).subscribe(()=>{
          //getAll
          this.ES.getAllEvent().subscribe((response)=>{
            this.eventSource=response
          })
        
      })}
    })

  }

  delete(): void{

  }


  displayedColumns: string[] = ['id', 'title', 'dateDebut', 'dateFin', 'lieu', 'edit', 'delete'];
}
