import { Component, OnInit } from "@angular/core";

import { ApiService } from "../shared/api.service";

@Component({
	selector: "app-dogs-list",
	templateUrl: "./dogs-list.component.html",
	styleUrls: ["./dogs-list.component.css"]
})
export class DogsListComponent implements OnInit {

	public dogList: string[] = [];

	public constructor(private apiService: ApiService) { }

	public ngOnInit(): void {
		this.prepareDogList();
	}

	private prepareDogList(): void {
		this.dogList = this.apiService.getDogs()
	}
}