import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "getAge"
})
export class UserAgePipe implements PipeTransform {
	public transform(dateOfBirth: Date, ...args: any[]): number {
		return new Date().getFullYear() - dateOfBirth.getFullYear();
	}
}