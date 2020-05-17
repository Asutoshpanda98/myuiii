import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminMasterComponent } from './admin-master/admin-master.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AddToCartServiceService } from './add-to-cart-service.service';
import {HttpClientModule } from '@angular/common/http'
import { IndianCurrency } from './cart/indianCurrency.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormProductMasterComponent } from './form-product-master/form-product-master.component';
import { FormRetailerComponent } from './form-retailer/form-retailer.component';
import { ListproductmasterComponent } from './listproductmaster/listproductmaster.component'



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminMasterComponent,
    CartComponent,
    IndianCurrency,
    NavBarComponent,
    MyProfileComponent,
    EditProfileComponent,
    AdminHomeComponent,
    FormProductMasterComponent,
    FormRetailerComponent,
    ListproductmasterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  providers: [AddToCartServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
