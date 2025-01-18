import { Component } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { PublicationService } from 'src/services/publication.service';
import { OutilsService } from 'src/services/outils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  NB_members:number=0 ;
  NB_tools:number=0 ;
  NB_events:number=0 ;
  NB_publications:number=0 ;
  nb_students: number =0 ;
  nb_teacher: number =0 ;
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ ]
    }
    
  ];
constructor(private ms:MemberService,private es: EventService, private pub:PublicationService, private tool:OutilsService){
  this.ms.getAllMembers().subscribe((data)=>{
    console.log(data)
    this.NB_members=data.length;
    for(let i =0 ;i<this.NB_members;i++){
      if (data[i].type=="etd"){
        this.nb_students++ ;
      }
      else {
        this.nb_teacher ++;
      }
    }



    this.es.getAllEvent().subscribe((data)=>{
      console.log(data)
      this.NB_events= data.length;
      
    })


    this.pub.getPublications().subscribe((data)=>{
      console.log(data)
      this.NB_publications= data.length;
      
    })




    this.chartData= [
      {
        // ⤵️ Add these
        label: '$ in millions',
        data: [ this.nb_teacher,this.nb_students]
      }
    ];
   
    
  })


 
}


chartLabels: string[] = ['nbTeachers','nbstudents'];
    chartOptions: ChartOptions = {};

}
