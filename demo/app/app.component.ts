import { Component } from '@angular/core';
import { SimpleGridComponent } from './simple-grid/simple-grid.component';

@Component({
    selector: 'my-app',
    directives: [ SimpleGridComponent ],
    templateUrl: 'app/app.html'
})

export class AppComponent {

}
