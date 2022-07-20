import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

	public numOfClicks = 0;

	public constructor() { }

	public increment() {
		this.numOfClicks++;
	}

	public ngOnInit(): void {
	}

}
