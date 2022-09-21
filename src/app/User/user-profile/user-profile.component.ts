import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  longText = ``;
 
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  // dialog Education function
  openDialogEducation() {
    this.dialog.open(AddEducationComponent );
  }

  // dialog Skill function
  openDialogSkill(){
    this.dialog.open(Skill)

  }
    
}
@Component({
  selector: 'app-user-profile',
  templateUrl: 'AddEducationDialog.html',

})
export class AddEducationComponent {
  datasource:FormGroup = new FormGroup({
    
  })
  constructor(private dialog:MatDialog) { }
  
  close(){
    this.dialog.closeAll();
  }
submit(){

}
}


@Component({
  selector: 'app-user-profile',
  templateUrl: 'AddSkill.html',

})
export class Skill{
  checked = false;
  indeterminate = false;
 

  constructor(private dialog:MatDialog) { }


  close(){
    this.dialog.closeAll();
  }

  login(){

  }
}

