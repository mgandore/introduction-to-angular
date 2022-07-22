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
	public selectedUserEmitter = new EventEmitter<number>()

	public getUserId(): number | undefined {
		return this.user?.id;
	}

	public sendId() {
		this.selectedUserEmitter.emit(this.getUserId());
	}
}