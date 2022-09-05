import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TalentInfoService } from 'src/app/service/talent-info.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource =new MatTableDataSource();
  filterdata:any[]=[];
  filterBy:any;
  constructor(private talent_info :TalentInfoService){}
  ngOnInit(): void {
    this.getall();

  }
  displayedColumns: string[] = ['#', 'First Name', 'Second Name', 'Last Name' ,'Specialization'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  getall(){
    return this.talent_info.gettalent_infos().subscribe(respo=>{
      this.dataSource = new MatTableDataSource(respo)
    })
  }
  // export class TableFilteringExample {

    // dataSource = new MatTableDataSource(any);

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



