import { Injectable, OnDestroy } from "@angular/core";
import { Observable, of } from "rxjs";

import { InputDateEnum } from "./enums/input-date.enum";
import { UserModel } from "./user.model";

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private selectedUsersIds: number[] = [];
	private dateType = InputDateEnum;
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

	public getUsers(): UserModel[] {
		return this.users;
	}

	public getUser(id: number): UserModel | undefined {
		let foundUser: UserModel | undefined = this.users.find((user: UserModel) => user.id === id);
		return foundUser;
	}

	public deleteUser(id: number): void {
		const foundUser: UserModel | undefined = this.users.find((user: UserModel) => user.id === id);
		if (foundUser) {
			const index: number = this.users.indexOf(foundUser);
			this.users.splice(index, 1);
		}
	}

	public getRandomText(): string {
		let randomText: string = "";
		const alphabetLetters: string = "abcdefghijklmnopqrstuvxyz";
		randomText += alphabetLetters.charAt(Math.floor(Math.random() * alphabetLetters.length)).toUpperCase();
		for (let i = 0; i < 5; i++) {
			randomText += alphabetLetters.charAt(Math.floor(Math.random() * alphabetLetters.length));
		}
		return randomText;
	}

	public getRandomNumForDate(input: InputDateEnum): number {
		switch (input) {
			case InputDateEnum.YEAR:
				return Math.floor(Math.random() * 100) + 1900;
			case InputDateEnum.MONTH:
				return Math.floor(Math.random() * 12) + 1;
			case InputDateEnum.DAY:
				return Math.floor(Math.random() * 31) + 1;
		}
	}

	public addUser(): void {
		this.users.push(
			{
				id: Math.floor(Math.random() * 100),
				name: this.getRandomText(),
				contact: this.getRandomText(),
				dateOfBirth: new Date(
					this.getRandomNumForDate(this.dateType.YEAR),
					this.getRandomNumForDate(this.dateType.MONTH),
					this.getRandomNumForDate(this.dateType.DAY))
			});
	}

	public getSelectedUsersIds(selectedUserId: number): number[] {
		if (this.selectedUsersIds.includes(selectedUserId)) {
			this.selectedUsersIds = this.selectedUsersIds.filter((userId) => userId !== userId);
		} else {
			this.selectedUsersIds.push(selectedUserId);
		}
		return this.selectedUsersIds;
	}

	public deleteSelected(): void {
		for (let userId of this.selectedUsersIds) {
			this.deleteUser(userId);
		}
		this.selectedUsersIds = [];
	}
}