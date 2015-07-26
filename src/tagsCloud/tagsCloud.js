import {customElement, inject, bindable} from 'aurelia-framework';
import {TagsCloudStore} from './tagsCloud.store';
import {handle} from 'aurelia-flux';

@customElement('todo-tags-cloud')
@inject(TagsCloudStore)
export class TagsCloud {
	constructor(tagsCloudStore) {
		this.tags = tagsCloudStore.tags;
	}
}