import {handle, waitFor} from 'aurelia-flux';
import {TodoListStore} from 'todo-list/todo-list.store';

export class TodoStatsStore {
	stats = {
		items:       0,
		completed:   0,
		uncompleted: 0,
		words:       0,
		characters:  0
	};
	
	@handle('list.addItem')
	@waitFor(TodoListStore)
	newItem(action, text) {
		this.stats.items++;
		this.stats.uncompleted++;
		this.stats.words += text.split(' ').length;
		this.stats.characters += text.length;		
	}
	
	@handle('list.completeItem')
	@waitFor(TodoListStore) 
	itemCompleted(action, id) {
		this.stats.completed++;
		this.stats.uncompleted--;
	}
	
	@handle('list.undoCompleteItem')
	@waitFor(TodoListStore)
	itemUncompleted(action, id) {
		this.stats.completed--;
		this.stats.uncompleted++;
	}	
}