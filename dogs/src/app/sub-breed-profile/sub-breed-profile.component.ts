import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../shared/api.service";

@Component({
	selector: "app-sub-breed-profile",
	templateUrl: "./sub-breed-profile.component.html",
	styleUrls: ["./sub-breed-profile.component.css"]
})
export class SubBreedProfileComponent implements OnInit {

	public dogName: string = "";
	public subBreedName: string = "";
	public imageURL: string = "";
	public requestStatus: string = "";

	public constructor(
		private apiService: ApiService,
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.prepareDogName();
		this.prepareSubBreedName();
		this.prepareSubBreedImageURL();
	}

	private prepareDogName(): void {
		this.route.paramMap.subscribe((params) => {
			this.dogName = String(params.get("name"));
		});
	}

	private prepareSubBreedName(): void {
		this.route.paramMap.subscribe((params) => {
			this.subBreedName = String(params.get("sub-breed"));
		});
	}

	private prepareSubBreedImageURL(): void {
		this.apiService.getSubBreedImageURL(this.dogName, this.subBreedName).subscribe((data: any) => {
			this.imageURL = data.message;
			this.requestStatus = data.status;
		});
	}

}
