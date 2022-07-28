import { Component, OnInit } from "@angular/core";

import { UserModel } from "../user.model";
import { OrderTypeEnum } from "../order-type.enum";
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

	public constructor(private userService: UserService) {

	}

	public ngOnInit() {
		this.allUsers = this.userService.getUsers();
	}

	public handleDeleteUser(id: number): void {
		alert(`User with Id: ${id} will be deleted`)
		this.allUsers = this.userService.deleteUser(id);
	}

	public handleAddClick(): void {
		this.allUsers = this.userService.addUser();
	}

	public handleSelectedUser(selectedUserId: number): void {
		this.selectedUsersIds = this.userService.getSelectedUsers(selectedUserId)
	}

	public handleDeleteSelectedClick(): void {
		alert("All selected users will be deleted!")
		this.allUsers = this.userService.deleteSelected();
		this.selectedUsersIds = [];
	}
}