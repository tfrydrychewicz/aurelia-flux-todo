import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bootswatch/lumen/bootstrap.css!';

export class App {   
  configureRouter(config, router){
    config.title = 'ToDo List';
    config.map([
      { 
        route: [''], 
        name: 'list', 
        moduleId: './list', 
        nav: true, 
        title:'List' 
      }      
    ]);

    this.router = router;
  }
}
