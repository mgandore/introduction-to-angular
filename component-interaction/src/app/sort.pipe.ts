import { Pipe, PipeTransform } from "@angular/core";
import { UserModel } from "./user.model";
import { OrderTypeEnum } from "./order-type.enum";

@Pipe({
	name: "sort"
})
export class SortPipe implements PipeTransform {
	public transform(users: UserModel[], order: OrderTypeEnum): UserModel[] {
		if (order === OrderTypeEnum.DSC) {
			return users.sort((user: any, nextUser: any) => nextUser.name < user.name ? -1 : nextUser.name > user.name ? 1 : 0);
		}
		return users.sort((user: any, nextUser: any) => user.name < nextUser.name ? -1 : user.name > nextUser.name ? 1 : 0);
	}

}