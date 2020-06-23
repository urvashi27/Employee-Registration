import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaticdataService } from '../staticdata.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  Ages = [{ age: "22" }, { age: "23" }, { age: "24" }, { age: "25" }, { age: "26" },
  { age: "27" }, { age: "28" }, { age: "29" }, { age: "30" }, { age: "31" }, { age: "32" },
  { age: "33" }, { age: "34" }, { age: "35" }, { age: "36" }]
  Employeeform: FormGroup;
  employees: FormArray;
  constructor(private fb: FormBuilder, private router: Router, private service: StaticdataService) {



  }

  ngOnInit() {

    this.Employeeform = this.fb.group(
      {
        employees: this.fb.array([this.addItem()])

      });
  }
  addItem(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      age: ['',Validators.required],
      salary: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      experience: ['',[Validators.required,Validators.maxLength(2)]],
    });
  }
  add(): void {
    if (this.Employeeform.invalid)
      return;
    this.service.memberDetails = this.Employeeform.get('employees').value;
    this.employees = this.Employeeform.get('employees') as FormArray;
    this.employees.push(this.addItem());

  }



  addMember() {

    if (this.Employeeform.invalid)
      return;
     let a=this.Employeeform.get('employees').value
    for (let i of a) {
      this.service.memberDetails.push(i);

    }
    //this.service.memberDetails.push(this.Employeeform.get('employees').value)
    this.router.navigate(['home/dashboard']);
  }

}

