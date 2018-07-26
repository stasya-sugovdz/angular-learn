import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection = 'recipe';
  onSelectedSection( val ) {
    console.log('val', val);
    this.activeSection = val;
  }
}
