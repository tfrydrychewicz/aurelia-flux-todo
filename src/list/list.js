import {customElement, inject} from 'aurelia-framework';
import {ListStore} from './list.store';
import {Dispatcher} from 'aurelia-flux';

@customElement("todo-list")
@inject(Dispatcher, ListStore)
export class ToDoList {
	constructor(dispatcher, listStore) {
		this.dispatcher = dispatcher;
		this.listStore = listStore;
	}	
	
	toggleCompleted(item) {
		if(item.completed === false) {
			this.dispatcher.dispatch('list.completeItem', item.id);
		} else {
			this.dispatcher.dispatch('list.undoCompleteItem', item.id);
		}
	}
}