import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdownbind';
  selected="01";
  arr=[{"city":"surat","id":"00"},
        {"city":"navsari", "id":"01"}];

  selectvalue(val){
    var ss=val.target.value;
    alert(ss);
  }
}
