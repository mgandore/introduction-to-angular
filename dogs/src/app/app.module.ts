import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingRoutingModule } from "./app-routing.module";
import { BreedProfileComponent } from "./breed-profile/breed-profile.component";

@NgModule({
	declarations: [
		AppComponent,
		DogsListComponent,
		NotFoundComponent,
		BreedProfileComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
