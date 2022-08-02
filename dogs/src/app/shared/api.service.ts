import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ApiService {

	public apiData: any;
	public dogNames: string[] = [];

	public constructor(private http: HttpClient) { }

	public getDogs(): string[] {
		this.http.get("https://dog.ceo/api/breeds/list/all").subscribe((data) => {
			this.apiData = data;
			const breedsList = this.apiData.message;
			for (let breed in breedsList) {
				const subBreedNames = breedsList[`${breed}`];
				if (this.hasSubbreeds(subBreedNames)) {
					this.dogNames.concat(this.addSubbreeds(subBreedNames, breed));
				} else {
					this.dogNames.push(breed);
				}
			}
		});
		return this.dogNames;
	}

	private hasSubbreeds(subBreedNames: string[]): boolean {
		return subBreedNames.length > 0;
	}

	private addSubbreeds(subBreedNames: string[], breed: string): string[] {
		let output: string[] = [];
		for (let i = 0; i < subBreedNames.length; i++) {
			const subBreed = subBreedNames[i];
			output.push(`${subBreed} ${breed}`);
		}
		return output;
	}

}