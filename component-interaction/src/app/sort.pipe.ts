import { Pipe, PipeTransform } from "@angular/core";
import { UserModel } from "./user.model";

@Pipe({
	name: "sort"
})

export class SortPipe implements PipeTransform {
	transform(users: UserModel[], order?: string): UserModel[] {
		console.log("TEST");
		if (order === "DSC") {
			return users.sort((user: any, nextUser: any) => nextUser.name < user.name ? -1 : nextUser.name > user.name ? 1 : 0);
		}
		return users.sort((user: any, nextUser: any) => user.name < nextUser.name ? -1 : user.name > nextUser.name ? 1 : 0);
	}

}