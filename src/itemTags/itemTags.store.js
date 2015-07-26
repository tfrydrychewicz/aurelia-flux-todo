import {Dispatcher, handle} from 'aurelia-flux';
import {inject} from 'aurelia-framework';

@inject(Dispatcher)
export class ItemTagsStore {
	tags = new Map();
	
	constructor(dispatcher) {
		this.dispatcher = dispatcher;
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