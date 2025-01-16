import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Evt } from 'src/models/evt';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  id!:string;

  //forcage de type
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private ES:EventService, private router:Router, private activatedRoute:ActivatedRoute, @Inject(MAT_DIALOG_DATA) data:any) {
    if (data){
      this.id= data.id;
      if (!!this.id){
        this.ES.getEventById(this.id).subscribe((evt)=>{
          this.initFormId(evt);
        })
      }
    }
    else{
      this.initForm();
    }
  }

  form!: FormGroup;

  initForm():void{
    this.form=new FormGroup({
        yourfieldname:new FormControl(),
        title: new FormControl(null,[Validators.required]),
        dateDebut: new FormControl(null,[Validators.required]),
        dateFin: new FormControl(null,[Validators.required]),
        lieu: new FormControl(null,[]),
    })
  }

  initFormId(event: Evt):void{
    this.form=new FormGroup({
        yourfieldname:new FormControl(),
        title: new FormControl(event.title,[Validators.required]),
        dateDebut: new FormControl(event.dateDebut ,[Validators.required]),
        dateFin: new FormControl(event.dateFin,[Validators.required]),
        lieu: new FormControl(event.lieu,[]),
    })
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
