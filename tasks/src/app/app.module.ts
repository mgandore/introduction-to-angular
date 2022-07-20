import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { InteractiveList } from './interactive-list/interactive-list.component';

@NgModule({
	declarations: [
		AppComponent,
		CustomButtonComponent,
		InteractiveList
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
