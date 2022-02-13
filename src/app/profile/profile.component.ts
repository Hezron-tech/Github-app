import { ProfileService } from './../profile.service';
import { Repo } from './../repo';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'classes/profile';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class profileComponent implements OnInit {
  profile!: Profile;
  repo!: any;
  constructor( private profileRequest:ProfileService) {
    this.repo= new Repo("","","","")
    this.profile=new Profile("","","",0,0,0)
  }
 
  search(searchItem:any) {
    
    this.profileRequest.getUserProfile(searchItem).then((success)=>{
      this.profile = this.profileRequest.profile
      console.log(this.profile)
    },
         (error)=>{
          console.log("error");
  
       }
       )

// here goes repo search





      }




    ngOnInit(): void {

      this.search('Hezron-tech')
    } 
  }

function ngOnInit() {
  throw new Error('Function not implemented.');
}

  

 
