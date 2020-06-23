import { Component, OnInit,ViewChild } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { StaticdataService } from '../staticdata.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sidenaveContent=[{
    'iconName':'dashboard',
    'name':'Dashboard',
    'path':'home/dashboard'
},{
'iconName':'settings_applications',
    'name':'Settings',
    'path':'home' 
},{
'iconName':'power_settings_new',
    'name':'Logout',
    'path':''
},{
'iconName':'perm_identity',
    'name':'Add Member',
    'path':'home/member'
}]
  
  constructor(private router:Router,private service:StaticdataService) { }

  ngOnInit() {
  
  }
  /**
   * 
   * 
   */
  navigateTo(arg,sidenav){
this.router.navigate([`${arg}`]);
sidenav.close();
  }
}
