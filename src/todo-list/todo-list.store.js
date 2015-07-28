import {inject} from 'aurelia-framework';
import {handle, Dispatcher} from 'aurelia-flux';

@inject(Dispatcher)
export class TodoListStore {
	
	_items = new Map();
	
	constructor(dispatcher) {
		this.dispatcher = dispatcher;
	}
	
	get items() {
		return this._items;
	}
	
	@handle('list.addItem')
	addItem(action, text) {				
		let newItem = new ListItem(text);
		this._items.set(newItem.id, newItem);
		this.dispatcher.dispatch('list.itemAdded', newItem);
	}
	
	@handle('list.completeItem')
	completeItem(action, id) {		
		if(this._items.has(id)) {
			this._items.get(id).completed = true;	
		}				
	}
	
	@handle('list.undoCompleteItem')
	undoCompleteItem(action, id) {		
		if(this._items.has(id)) {
			this._items.get(id).completed = false;	
		}
	}			
}

export class ListItem {
	constructor(text) {
		this.id =  (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
		this.text = text;
		this.completed = false;		
	}
}