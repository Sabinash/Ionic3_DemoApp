import { Component } from '@angular/core';
import { HomeserviceService } from '../homeservice.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any;
  status: String;

  constructor(private mHomeserviceService : HomeserviceService) {
   
  }

  getData(){
    this.getDataFromServer();
  }

  getDataFromServer(){
    this.mHomeserviceService.serviceCall().subscribe((response)=> {
      console.log(JSON.stringify(response));
      this.items = response;
    });
  }

  uploadToDB(){
    this.mHomeserviceService.saveToFireBase(this.items).then(res => {
      if(res){
        this.status="Updated to firebase successfully";
        console.log("Updated to firebase successfully");
      }
    })
   
  }
  
}
