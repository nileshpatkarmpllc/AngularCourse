import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  styleUrls: ['./app.component.css'],
  template : `
    <button class="btn btn-primary" [class.active] = "isActive">Save</button>
    <br/>
    <div (click)="onDivClicked()">
      <button (click)="OnSave($event)">Save Click</button>
    </div>  
  `
})
export class AppComponent {
  title = 'Angular App';
  isActive = false;

  onDivClicked(){
    console.log("Div was clicked");
  }

  OnSave($event){
    $event.stopPropagation();
    console.log("On Save is clicked", $event);
  }
}
