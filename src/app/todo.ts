export class Todo {
	id:number;
	title:string = '';
	complete: boolean  = false;


	constructor(title:string = '',complete:boolean){
		this.title = title;
    this.complete = complete;
	}

}
