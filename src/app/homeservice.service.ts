import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient,private db: AngularFireDatabase) { 
  }

  public url = "https://jsonplaceholder.typicode.com/users";

  serviceCall() {
    return this.http.get(this.url);
  }

  saveToFireBase(response) {
    return this.db.list('UserDetails').push(response);
  }
}
