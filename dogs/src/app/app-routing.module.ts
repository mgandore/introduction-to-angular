import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BreedProfileComponent } from "./breed-profile/breed-profile.component";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SubBreedProfileComponent } from "./sub-breed-profile/sub-breed-profile.component";

const routes: Routes = [
	{ path: "", component: DogsListComponent },
	{ path: "breed/:name/:sub-breed", component: SubBreedProfileComponent },
	{ path: "breed/:name", component: BreedProfileComponent },
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
