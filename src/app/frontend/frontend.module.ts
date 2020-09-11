import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend-routing.module';
import { UserComponent } from './user/user.component';
import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScrapeComponent } from './user/scrape/scrape.component';
import { PostRequirementComponent } from './user/post-requirement/post-requirement.component';


@NgModule({
  declarations: [UserComponent, FrontendComponent, HeaderComponent, FooterComponent, SidebarComponent, ScrapeComponent, PostRequirementComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule
  ]
})
export class FrontendModule { }
