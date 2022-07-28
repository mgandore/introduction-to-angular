import { Injectable } from "@angular/core";

import { UserModel } from "./user.model";


@Injectable({
	providedIn: 'root',
})
export class UserService {
	private users: UserModel[] = [
		{
			id: 7,
			name: "Catalin",
			contact: "example@email.xyz",
			dateOfBirth: new Date(2005, 1, 1)
		},

		{
			id: 6,
			name: "Daniel",
			contact: "example@email.xyz",
			dateOfBirth: new Date(2000, 1, 1)
		},

		{
			id: 1,
			name: "Popesco",
			contact: "example@email.xyz",
			dateOfBirth: new Date(2012, 1, 1)
		},

		{
			id: 2,
			name: "Ana",
			dateOfBirth: new Date(1990, 1, 1)
		}
	];

	public getUsers() {
		return this.users;
	}
}