import { Component, OnInit } from "@angular/core";

import { ApiService } from "../shared/api.service";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"]
})
export class DogsListComponent implements OnInit {

	public dogNames: string[] = [];
	public responseData: any;

	public constructor(private apiService: ApiService) { }

	public ngOnInit(): void {
		this.prepareDogList();
	}

	private prepareDogList(): void {
		this.apiService.getDogNames().subscribe(data => {
			this.responseData = data;
			const dogNamseList = this.responseData.message;
			for (let dogName in dogNamseList) {
				this.dogNames.push(dogName);
			}
		});
	}
}