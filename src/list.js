import {inject} from 'aurelia-framework';
import {Dispatcher} from 'aurelia-flux';

@inject(Dispatcher)
export class List {
	constructor(dispatcher) {
		this.dispatcher = dispatcher;
	}

	addItem(text:string) {
		let newItemText = (text || '').trim();

		if(newItemText === '') {
			return;
		}

		this.dispatcher.dispatch('list.addItem', newItemText);
	}	
}
