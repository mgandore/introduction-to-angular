import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "about", component: AboutComponent },
  { path: "users", component: UserListComponent },
  { path: "user/:id", component: UserProfileComponent },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
