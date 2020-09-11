
import {  Routes } from '@angular/router';
import { UserOneProfileComponent } from './user-profiles/user-one-profile/user-one-profile.component';
import { LoginFormComponent } from './body/login-form/login-form.component';

export const appRoutes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'userOne', component: UserOneProfileComponent}

];