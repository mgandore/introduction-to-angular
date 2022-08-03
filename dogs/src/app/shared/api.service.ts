import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ApiService {

	private url: string = "https://dog.ceo/api/";

	public constructor(private http: HttpClient) { }

	public getDogNames(): Observable<Object> {
		return this.http.get(`${this.url}breeds/list/all`);
	}

	public getImageURL(dogName: string): Observable<Object> {
		return this.http.get(`${this.url}breed/${dogName}/images/random`);
	}

	public getSubBreedNames(dogName: string): Observable<Object> {
		return this.http.get(`${this.url}breed/${dogName}/list`);
	}

	public getSubBreedImageURL(dogName: string, subBreedName: string): Observable<Object> {
		return this.http.get(`${this.url}breed/${dogName}/${subBreedName}/images/random`);
	}

}