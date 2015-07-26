import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bootswatch/lumen/bootstrap.css!';

export class App {   
  configureRouter(config, router){
    config.title = 'ToDo List';
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',       nav: true,  title:'Welcome' }      
    ]);

    this.router = router;
  }
}
