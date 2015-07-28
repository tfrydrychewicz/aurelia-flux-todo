import {customElement, inject} from 'aurelia-framework';
import {handle} from 'aurelia-flux';
import {TodoTagsCloudStore} from './todo-tags-cloud.store';

@customElement('todo-tags-cloud')
@inject(TodoTagsCloudStore)
export class TagsCloud {
	constructor(todoTagsCloudStore) {
		this.tags = todoTagsCloudStore.tags;
	}
}
