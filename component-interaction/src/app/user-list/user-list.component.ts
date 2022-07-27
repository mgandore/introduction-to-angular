import { Component, OnInit } from "@angular/core";

import { UserModel } from "../user.model";
import { OrderTypeEnum } from '../orderType.enum';


@Component({
	selector: "user-list",
	templateUrl: "./user-list.component.html",
	styleUrls: ["./user-list.component.css"]
})

export class UserListComponent implements OnInit {

	public allUsers: UserModel[] = [];
	public selectedUsersIds: number[] = [];
	public orderType = OrderTypeEnum;

	public ngOnInit() {
		this.prepareUsers();
	}

	private prepareUsers(): void {
		this.allUsers = [
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
	}

	public handleDeleteUser(event: number): void {
		alert(`User with Id: ${event} will be deleted`)
		this.allUsers = this.allUsers.filter((user) => user.id !== event);
		this.allUsers = [...this.allUsers];
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

	public getRandomNumForDate(input?: string): number {
		if (input === "year") {
			return Math.floor(Math.random() * 100) + 1900;
		} else if (input === "month") {
			return Math.floor(Math.random() * 12) + 1;
		}
		return Math.floor(Math.random() * 31) + 1;


	}

	public handleAddClick(): void {
		this.allUsers.push(
			{
				id: Math.floor(Math.random() * 100),
				name: this.getRandomText(),
				contact: this.getRandomText(),
				dateOfBirth: new Date(this.getRandomNumForDate("year"), this.getRandomNumForDate("month"), this.getRandomNumForDate())
			});
		this.allUsers = [...this.allUsers];
	}

	public handleSelectedUser(selectedUserId: number): void {
		if (this.selectedUsersIds.includes(selectedUserId)) {
			this.selectedUsersIds = this.selectedUsersIds.filter((userId) => userId !== userId);
		} else {
			this.selectedUsersIds.push(selectedUserId);
		}
	}

	public handleDeleteSelectedClick(): void {
		alert("All selected users will be deleted!")
		for (let userId of this.selectedUsersIds) {
			this.allUsers = this.allUsers.filter((user) => user.id !== userId);
		}
		this.selectedUsersIds = [];
		this.allUsers = [...this.allUsers];
	}
}