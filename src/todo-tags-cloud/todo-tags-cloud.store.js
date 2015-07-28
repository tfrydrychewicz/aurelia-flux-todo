import {handle} from 'aurelia-flux';

export class TodoTagsCloudStore {
	tags = new Map();
	
	@handle('tags.tagAdded')
	newTag(action, tag) {
		if(this.tags.has(tag) === false) { 
			this.tags.set(tag, 1);
		} else {
			this.tags.set(tag, this.tags.get(tag) + 1);
		}
	}
}