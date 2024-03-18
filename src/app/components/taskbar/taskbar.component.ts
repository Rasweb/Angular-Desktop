import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { formatDate } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'taskbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
})
export class TaskbarComponent {
  today = new Date();
  dateToday = '';
  timeToday = '';
  constructor() {
    this.dateToday = formatDate(this.today, 'dd-MM-yyyy', 'en-US');
    this.timeToday = formatDate(this.today, 'hh:mm a', 'en-US');
  }
}
