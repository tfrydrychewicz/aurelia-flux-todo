import {customElement, inject} from 'aurelia-framework';
import {StatsStore} from './stats.store';

@customElement('todo-stats')
@inject(StatsStore)
export class Stats {
	constructor(statsStore) {
		this.stats = statsStore.stats;
	}
}