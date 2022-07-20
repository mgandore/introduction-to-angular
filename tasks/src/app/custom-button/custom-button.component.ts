import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

	public numOfClicks: number = 0;

	public constructor() { }

	public ngOnInit(): void {
	}

	public increment(): void {
		this.numOfClicks++;
	}

}
