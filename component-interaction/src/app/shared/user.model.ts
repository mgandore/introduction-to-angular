export class UserModel {
	public id?: number = 0;
	public name?: string = "DEFAULT_VALUE";
	public contact?: string = "DEFAULT_VALUE";
	public dateOfBirth: Date = new Date(2000, 12, 12);
}