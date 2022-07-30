import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IsAdultUserPipe } from "./shared/pipes/is-adult-user.pipe";
import { SortPipe } from "./shared/pipes/sort.pipe";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAgePipe } from "./shared/pipes/user-age.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutComponent } from "./about/about.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    SortPipe,
    UserAgePipe,
    IsAdultUserPipe,
    NotFoundComponent,
    HomePageComponent,
    AboutComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
