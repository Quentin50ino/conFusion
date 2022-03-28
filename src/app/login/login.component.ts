import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username : '', password : '', remember : false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  //si prende una ref del login component

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close(); //chiude la dialog box
  }


}
