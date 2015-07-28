import {customElement, inject, bindable} from 'aurelia-framework';
import {handle} from 'aurelia-flux';
import {TodoItemTagsStore} from './todo-item-tags.store';

@customElement("todo-item-tags")
@inject(TodoItemTagsStore)
export class TodoItemTags {	
	@bindable itemId;
	
	constructor(todoItemTagsStore) {	
		this.todoItemTagsStore = todoItemTagsStore;
		this.isItemCompleted = false;
	}
	
	get tags() {
		return this.todoItemTagsStore.tags.get(this.itemId);		
	}
	
	@handle('list.completeItem')
	itemCompleted(action, id) {
		if(this.itemId === id) {
			this.isItemCompleted = true;
		}
	}
	
	@handle('list.undoCompleteItem')
	undoItemCompleted(action, id) {
		if(this.itemId === id) {
			this.isItemCompleted = false;
		}
	}
}