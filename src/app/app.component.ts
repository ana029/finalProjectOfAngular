import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/users.interfase';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finalProjectOfAngular';

  users !: User[];

  newUser = '';

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;    
    })
  }


  addNewUser(){
    this.users = [
      { id: 31,
        name: this.newUser,
        username: this.newUser,
        email: "something",
        address: {
            street: "something",
            suite: "something",
            city: "something",
            zipcode: 0,
            geo: {
                lat: 0,
                lng: 0
              }
            },
        phone: 0,
        website: "something",
        company: {
              name: "something",
              catchPhrase: "something",
              bs: "something"
            }    
    },
      ...this.users
    ]

  }
}
