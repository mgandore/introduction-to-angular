import { Component, OnInit } from "@angular/core";

import { UserModel } from "../user.model";

@Component({
	selector: "user-list",
	templateUrl: "./user-list.component.html",
	styleUrls: ["./user-list.component.css"]
})

export class UserListComponent implements OnInit {

	public allUsers: UserModel[] = [];

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

	public getRandomStr(): string {
		let randomStr = "";
		const characters = "abcdefghijklmnopqrstuvxyz";
		randomStr += characters.charAt(Math.floor(Math.random() * characters.length)).toUpperCase();
		for (let i = 0; i < 5; i++) {
			randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return randomStr
	}

	public handleAddClick(): void {
		this.allUsers.push(
			{
				id: Math.floor(Math.random() * 100),
				name: this.getRandomStr(),
				contact: this.getRandomStr()
			})
	}
}