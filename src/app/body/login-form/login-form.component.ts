import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from './../../modules/webcam/domain/webcam-image';

import { NgxSpinnerService } from "ngx-spinner";
import { UserOneProfileComponent } from 'src/app/user-profiles/user-one-profile/user-one-profile.component';
import { RouterModule, Router } from '@angular/router';




///modules/webcam/domain/webcam-image


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  showWebcam = false;
  isUnauthorised:boolean=false;

  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;

  constructor(private spinner: NgxSpinnerService,
    private rtr: Router
 
    ) {}

  ngOnInit(): void {
  }

  toggleWebcam() {
    console.log("Button clcikced")
    this.showWebcam = !this.showWebcam;

    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();   
      this.showWebcam = false;
      //this.rtr.navigate(['/userOne']);
      //this.isUnauthorised=true;
      if(this.isUnauthorised){
        //here popup will be displayed
        //alert("User Not Authorized");
      }else{
        this.rtr.navigate(['/userOne']);
      }
    }, 5000);

    

  }

triggerSnapshot()  {
    this.trigger.next();
  } 

/*   public handleImage(webcamImage: WebcamImage)  {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  } */

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


 
  close(){
    this.isUnauthorised=false;
  }

      

}
