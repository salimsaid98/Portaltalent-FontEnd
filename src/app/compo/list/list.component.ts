import { Component, OnInit } from '@angular/core';
import { TalentInfoService } from 'src/app/service/talent-info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

talent_inf:any[]=[]
  constructor(private talemt_info_service:TalentInfoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.talemt_info_service.gettalent_infos().subscribe(data=>{
      this.talent_inf = data;
        console.log(data);

    })
  }

  

}
