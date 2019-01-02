import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule}from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     RouterModule.forRoot([
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent,children:[

        {path:'profile',component:ProfileComponent},
        {path:'products',component:ProductsComponent},
  
        ]},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
    


 ]),
 AngularFireDatabaseModule,
 AngularFireModule.initializeApp(environment.firebaseConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
