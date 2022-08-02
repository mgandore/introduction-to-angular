import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ApiService {

	public apiData: any;
	public dogList: string[] = [];

	public constructor(private http: HttpClient) { }

	public getDogs(): string[] {
		this.http.get("https://dog.ceo/api/breeds/list/all").subscribe((data) => {
			this.apiData = data;
			const breedsList = this.apiData.message;
			for (let breed in breedsList) {
				const oneBreed = breedsList[`${breed}`];
				if (hasSubbreeds(oneBreed)) {
					this.dogList.concat(addSubbreeds(oneBreed, breed));
				} else {
					this.dogList.push(breed)
				}
			}

			function hasSubbreeds(breedArr: string[]): boolean {
				return breedArr.length > 0;
			}

			function addSubbreeds(oneBreed: string[], breed: string): string[] {
				let output: string[] = [];
				for (let i = 0; i < oneBreed.length; i++) {
					const subbreed = oneBreed[i];
					output.push(`${subbreed} ${breed}`);
				}
				return output;
			}
		});
		return this.dogList;
	}

}