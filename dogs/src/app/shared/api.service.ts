import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ApiService {

	public constructor(private http: HttpClient) { }

	public getDogNames(): Observable<Object> {
		return this.http.get("https://dog.ceo/api/breeds/list/all");
	}

	public getImageURL(dogName: string): Observable<Object> {
		return this.http.get(`https://dog.ceo/api/breed/${dogName}/images/random`);
	}

	public getSubBreedNames(dogName: string): Observable<Object> {
		return this.http.get(`https://dog.ceo/api/breed/${dogName}/list`);
	}

}