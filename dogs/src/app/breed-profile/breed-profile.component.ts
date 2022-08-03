import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../shared/api.service";

@Component({
	selector: "app-breed-profile",
	templateUrl: "./breed-profile.component.html",
	styleUrls: ["./breed-profile.component.css"]
})
export class BreedProfileComponent implements OnInit {

	public dogName: string = "";
	public imageURL: string = "";
	public subBreedNames: string[] = [];

	public constructor(
		private apiService: ApiService,
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.prepareDogName();
		this.prepareImageURL();
		this.prepareDogSubBreed();
	}

	private prepareDogName(): void {
		this.route.paramMap.subscribe((params) => {
			this.dogName = String(params.get("name"));
		});
	}

	private prepareImageURL(): void {
		this.apiService.getImageURL(this.dogName).subscribe((data: any) => {
			this.imageURL = data.message;
		});
	}

	private prepareDogSubBreed(): void {
		this.apiService.getSubBreedNames(this.dogName).subscribe((data: any) => {
			for (let subBreed of data.message) {
				this.subBreedNames.push(subBreed);
			}
		});
	}

}
