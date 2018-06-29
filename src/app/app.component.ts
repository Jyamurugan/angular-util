import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   * Gets title
   * @param {string} sampleInput input nothing requires
   * @returns  gets title of the page
   */
  getTitle(sampleInput: string) {
    return this.title;
  }
}
