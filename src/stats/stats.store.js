import {handle, waitFor} from 'aurelia-flux';
import {ListStore} from 'list/list.store';

export class StatsStore {
	stats = {
		items: 0,
		completed: 0,
		uncompleted: 0,
		words: 0,
		characters: 0
	};
	
	@handle('list.addItem')
	@waitFor(ListStore)
	newItem(action, text) {
		this.stats.items++;
		this.stats.uncompleted++;
		this.stats.words += text.split(' ').length;
		this.stats.characters += text.length;		
	}
	
	@handle('list.completeItem')
	@waitFor(ListStore) 
	itemCompleted(action, id) {
		this.stats.completed++;
		this.stats.uncompleted--;
	}
	
	@handle('list.undoCompleteItem')
	@waitFor(ListStore)
	itemUncompleted(action, id) {
		this.stats.completed--;
		this.stats.uncompleted++;
	}	
}