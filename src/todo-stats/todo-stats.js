import {customElement, inject} from 'aurelia-framework';
import {TodoStatsStore} from './todo-stats.store';

@customElement('todo-stats')
@inject(TodoStatsStore)
export class TodoStats {
	constructor(todoStatsStore) {
		this.stats = todoStatsStore.stats;
	}
}