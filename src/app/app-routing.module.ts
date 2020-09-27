import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MylistingsPageComponent } from './mylistings-page/mylistings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path: '', redirectTo:'/listings', pathMatch:'full'},
  {path: 'listings', component: ListingsPageComponent, pathMatch:'full'},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListingPageComponent},
  {path: 'listing/:id', component: ListingsDetailPageComponent },
  {path:'mylistings', component:MylistingsPageComponent},
  {path: 'new-listing', component:NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
