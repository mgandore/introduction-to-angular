import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserModel } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
	selector: "app-user-profile",
	templateUrl: "./user-profile.component.html",
	styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {

	public user?: UserModel

	public constructor(
		private route: ActivatedRoute,
		private userService: UserService,
	) { }

	public ngOnInit() {
		this.prepareUserFromURL()
	}

	private prepareUserFromURL() {
		this.route.paramMap.subscribe(params => {
			const id = Number(params.get('id'));
			const foundUser = this.userService.getUser(id);
			this.user = foundUser;
		});
	}
}
