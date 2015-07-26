import {customElement, inject, bindable} from 'aurelia-framework';
import {ItemTagsStore} from './itemTags.store';
import {handle} from 'aurelia-flux';

@customElement("todo-item-tags")
@inject(ItemTagsStore)
export class ItemTags {	
	@bindable itemId;
	
	constructor(itemTagsStore) {	
		this.itemTagsStore = itemTagsStore;
		this.complete = false;
	}
	
	get tags() {
		return this.itemTagsStore.tags.get(this.itemId);		
	}
	
	@handle('list.completeItem')
	itemCompleted(action, id) {
		if(this.itemId === id) {
			this.complete = true;
		}
	}
	
	@handle('list.undoCompleteItem')
	undoItemCompleted(action, id) {
		if(this.itemId === id) {
			this.complete = false;
		}
	}
}