import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IsAdultUserPipe } from "./is-adult-user.pipe";
import { SortPipe } from "./sort.pipe";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAgePipe } from "./user-age.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    SortPipe,
    UserAgePipe,
    IsAdultUserPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
