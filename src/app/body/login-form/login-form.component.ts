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
      this.rtr.navigate(['/userOne']);
      //alert("User Not Authorized");
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

}
