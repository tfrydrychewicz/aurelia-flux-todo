import {customElement, inject} from 'aurelia-framework';
import {Dispatcher} from 'aurelia-flux';
import {TodoListStore} from './todo-list.store';

@customElement("todo-list")
@inject(Dispatcher, TodoListStore)
export class TodoList {
	constructor(dispatcher, todoListStore) {
		this.dispatcher = dispatcher;
		this.todoListStore = todoListStore;
	}	
	
	toggleCompleted(item) {
		if(item.completed === false) {
			this.dispatcher.dispatch('list.completeItem', item.id);
		} else {
			this.dispatcher.dispatch('list.undoCompleteItem', item.id);
		}
	}
}