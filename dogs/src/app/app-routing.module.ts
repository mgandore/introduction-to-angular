import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
	{ path: "", component: DogsListComponent },
	{ path: "breeds", component: DogsListComponent },
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
