import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminMasterComponent } from './admin-master/admin-master.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormProductMasterComponent } from './form-product-master/form-product-master.component';
import { FormRetailerComponent } from './form-retailer/form-retailer.component';


const routes: Routes = [
  {path: '',component: AuthComponent },
  {path: 'admin',component: AdminMasterComponent},
  {path: 'myprofile',component: MyProfileComponent},
  {path: 'EditProfile',component: EditProfileComponent},
  {path: 'adminhome',component:AdminHomeComponent},
  {path: 'adminform',component:FormProductMasterComponent},
  {path: 'retailerform',component:FormRetailerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
