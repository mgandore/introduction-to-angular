import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";

import { AppComponent } from "./app.component";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingRoutingModule } from "./app-routing.module";
import { BreedProfileComponent } from "./breed-profile/breed-profile.component";
import { SubBreedProfileComponent } from "./sub-breed-profile/sub-breed-profile.component";
import { RedirectHomeBtnComponent } from "./shared/redirect-home-btn/redirect-home-btn.component";

@NgModule({
	declarations: [
		AppComponent,
		DogsListComponent,
		NotFoundComponent,
		BreedProfileComponent,
		SubBreedProfileComponent,
		RedirectHomeBtnComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingRoutingModule,
		ButtonModule,
		TableModule,
		CardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
