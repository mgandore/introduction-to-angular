import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

	public isEnabled: boolean = false;

	public constructor() { }

	public ngOnInit(): void {
	}

	public toggleInput(): void {
		if (this.isEnabled) {
			this.isEnabled = false;
		} else {
			this.isEnabled = true;
		}
	}

}
