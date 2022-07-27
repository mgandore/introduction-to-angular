import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "getAge"
})
export class UserAgePipe implements PipeTransform {
	public transform(dateOfBirth: any, ...args: any[]): number {
		let currentDate = new Date();
		return currentDate.getFullYear() - dateOfBirth.getFullYear();
	}
}