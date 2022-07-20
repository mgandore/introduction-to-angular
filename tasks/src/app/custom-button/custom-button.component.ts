import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

	public isInputEnabled: boolean = false;
	public inputText: string = '';

	public constructor() { }

	public ngOnInit(): void {
	}

	public toggleInput(): void {
		this.isInputEnabled = !this.isInputEnabled;
	}

	public updateGreet(event: any): void {
		this.inputText += event.target.value[event.target.value.length - 1];
	}
}