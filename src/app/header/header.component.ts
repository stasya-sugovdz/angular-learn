import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() activeSection = new EventEmitter<string>();
  onSelect( val: string, tmp?: any ) {
    console.log('tmp', tmp);
    this.activeSection.emit( val );
  }

}
