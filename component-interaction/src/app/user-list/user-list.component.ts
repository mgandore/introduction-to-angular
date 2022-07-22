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
				name: "Name_1",
				contact: "Contact_1"
			},

			{
				name: "Name_2",
				contact: "Contact_2"
			},

			{
				name: "Name_3",
				contact: "Contact_3"
			},

			{
				name: "Name_4",
			}
		]
	}

}