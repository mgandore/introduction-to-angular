import { Component } from '@angular/core';

@Component({
	selector: "interactive-list",
	templateUrl: "./interactive-list.component.html",
	styleUrls: ["./interactive-list.component.css"]
})

export class InteractiveList {

	public names: string[] = ["Catalin", "Mihai", "Daniel"];
	public isListShowing = false;

	public constructor() { }

	public onInit(): void {
	}

	public toggleList(): void {
		this.isListShowing = !this.isListShowing;
	}

}