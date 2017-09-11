import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches=['on', 'off', 'on', 'on', 'off', 'on', 'off', 'off', 'off', 'on'];
  change(index){
    if(this.switches[index] == 'on'){
      this.switches[index] = 'off';
    }
    else
      this.switches[index] = 'on';
  }
}
