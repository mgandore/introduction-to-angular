import { Component, OnInit } from "@angular/core";

import { UserModel } from "../user.model";
import { OrderTypeEnum } from "../order-type.enum";
import { InputDateEnum } from "../input-date.enum";
import { UserService } from "../user.service";


@Component({
	selector: "user-list",
	templateUrl: "./user-list.component.html",
	styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

	public allUsers: UserModel[] = [];
	public selectedUsersIds: number[] = [];
	public orderType = OrderTypeEnum;
	public dateType = InputDateEnum;

	public constructor(private userService: UserService) {

	}

	public ngOnInit() {
		this.allUsers = this.userService.getUsers();
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

	public handleAddClick(): void {
		this.allUsers.push(
			{
				id: Math.floor(Math.random() * 100),
				name: this.getRandomText(),
				contact: this.getRandomText(),
				dateOfBirth: new Date(
					this.getRandomNumForDate(this.dateType.YEAR),
					this.getRandomNumForDate(this.dateType.MONTH),
					this.getRandomNumForDate(this.dateType.DAY))
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