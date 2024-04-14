import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sgi-list-popup-view',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './list-popup-view.component.html',
  styleUrl: './list-popup-view.component.css'
})
export class ListPopupViewComponent {
  @Input() alternateNames: string[] = [];
  isVisible = false;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
