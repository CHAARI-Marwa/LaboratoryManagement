import { Component } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_Articles:number=0;
  Nb_Tools:number=0;
  Nb_Members:number=0;
  Nb_Events:number=0;
  Nb_Students:number=0;
  Nb_Teachers:number=0;
  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [  ]
    }
  ];
  constructor(private MS:MemberService, privateEs:EventService){
    this.MS.getAllMembers().subscribe((data)=>{
      this.Nb_Members=data.length;
      console.log(this.Nb_Members)
      for(let i=0;i<this.Nb_Members;i++){
        if(data[i].type=="student")
          this.Nb_Students++;
        else this.Nb_Teachers++;
      }
      this.chartData=[
        {
          label: '$ in millions',
          data: [ this.Nb_Teachers, this.Nb_Students ]
        }

      ]
      console.log(this.Nb_Students)
      console.log(this.Nb_Teachers)
    })
  }

  
  chartLabels: string[] = ['nbTeachers','nbStudents'];
  chartOptions: ChartOptions = {};


}
