import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "isAdult"
})

export class isAdultUserPipe implements PipeTransform {
	public transform(age: number, ...args: any[]): boolean {
		return age >= 18;
	}
}