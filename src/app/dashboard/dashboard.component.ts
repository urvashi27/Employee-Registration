import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../staticdata.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Name','Age','Salary','Experience'];
  dataSource;
  constructor(private service: StaticdataService) { }

  ngOnInit() {
  console.log(this.service.memberDetails)
  
  this.dataSource = new MatTableDataSource( this.service.memberDetails);
  }

}
