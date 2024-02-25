import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theStack: string[] = ['Data 1', 'Data 2', 'Data 3'];
  title='Ishva Stack Demo';

  addNew() {
    const freshData = `Data ${this.theStack.length + 1}`;
    this.theStack.push(freshData);
  }

  remove() {
    if (this.theStack.length > 0) {
      this.theStack.pop();
    }
  }
}
