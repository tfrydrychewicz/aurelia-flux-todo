import {inject} from 'aurelia-framework';
import {Dispatcher, handle} from 'aurelia-flux';

@inject(Dispatcher)
export class TodoItemTagsStore {
	_tags = new Map();
		
	constructor(dispatcher) {
		this.dispatcher = dispatcher;
	}
	
	get tags() {
		return this._tags;
	}
	
	@handle('list.itemAdded')
	newItem(action, item) {		
		let itemTags = item.text.match(/\#[^ $]+/g);
		
		if(itemTags !== null) {			
			for(let tag of itemTags) {
				this.dispatcher.dispatch('tags.addTag', tag, item.id);
			}						
		}								
	}			
	
	@handle('tags.addTag')
	addTag(action, tag, itemId) {		
		tag = (tag || '').trim().toLowerCase().substring(1)
		
		if(this.tags.has(itemId) === false) {
			this.tags.set(itemId, []);
		}
		
		if(this.tags.get(itemId).indexOf(tag) === -1) {
			this.tags.get(itemId).push(tag);
			this.dispatcher.dispatch('tags.tagAdded', tag, itemId);
		}
	}
}