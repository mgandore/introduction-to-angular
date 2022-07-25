import { Component, EventEmitter, Input, Output } from "@angular/core";

import { UserModel } from "../user.model";

@Component({
	selector: "user-details",
	templateUrl: "./user-details.component.html",
	styleUrls: ["./user-details.component.css"]
})

export class UserDetailsComponent {

	@Input()
	public user?: UserModel;

	@Output()
	public onDeleteUser = new EventEmitter<number>()
	@Output()
	public onSelectUser = new EventEmitter<number>()

	public handleDeleteClick(): void {
		this.onDeleteUser.emit(this.user?.id);
	}

	public handleChecked(): void {
		this.onSelectUser.emit(this.user?.id);
	}
}