import {inject} from 'aurelia-framework';
import {Dispatcher, handle} from 'aurelia-flux';

@inject(Dispatcher)
export class Welcome {
	constructor(dispatcher) {
		this.dispatcher = dispatcher;				
	}	
	
	addItem() {
		let text = this.text || '';
		text = text.trim();
		if(text === '') {
			return;
		}
		this.dispatcher.dispatch('list.addItem', this.text);
		this.text = '';				
	}	
}
