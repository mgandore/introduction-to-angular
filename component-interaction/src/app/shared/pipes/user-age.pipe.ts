import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "getAge"
})
export class UserAgePipe implements PipeTransform {
	public transform(dateOfBirth: Date | undefined, ...args: any[]): number {
		if (dateOfBirth) {
			return new Date().getFullYear() - dateOfBirth.getFullYear();
		}
		return -1;
	}
}