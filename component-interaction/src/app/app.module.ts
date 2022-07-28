import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IsAdultUserPipe } from "./shared/is-adult-user.pipe";
import { SortPipe } from "./shared/sort.pipe";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAgePipe } from "./shared/user-age.pipe";
import { UserService } from "./shared/user.service";

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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
