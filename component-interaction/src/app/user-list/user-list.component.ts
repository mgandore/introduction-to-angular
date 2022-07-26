import { Component, OnInit } from "@angular/core";

import { UserModel } from "../user.model";

@Component({
	selector: "user-list",
	templateUrl: "./user-list.component.html",
	styleUrls: ["./user-list.component.css"]
})

export class UserListComponent implements OnInit {

	public allUsers: UserModel[] = [];
	public selectedUsersIds: number[] = [];

	public ngOnInit() {
		this.prepareUsers();
	}

	private prepareUsers(): void {
		this.allUsers = [
			{
				id: 0,
				name: "Name_1",
				contact: "Contact_1"
			},

			{
				id: 1,
				name: "Name_2",
				contact: "Contact_2"
			},

			{
				id: 2,
				name: "Name_3",
				contact: "Contact_3"
			},

			{
				id: 3,
				name: "Name_4",
			}
		];
	}

	public handleDeleteUser(event: number): void {
		alert(`User with Id: ${event} will be deleted`)
		this.allUsers = this.allUsers.filter((user) => user.id !== event);
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

	public handleAddClick(): void {
		this.allUsers.push(
			{
				id: Math.floor(Math.random() * 100),
				name: this.getRandomText(),
				contact: this.getRandomText()
			});
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
	}
}