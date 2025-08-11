import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recurrence-pattern-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recurrence-pattern-generator.component.html',
  styleUrls: ['./recurrence-pattern-generator.component.css']
})
export class RecurrencePatternGeneratorComponent {
  Object = Object;

  weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  pattern: string = 'daily';
  time: string = '12:00';
  date: string = '1';
  selectedDays: { [key: string]: boolean } = {
    monday: false, tuesday: false, wednesday: false,
    thursday: false, friday: false, saturday: false, sunday: false
  };
  description: string = '';

  ngOnInit() {
    this.generateDescription();
  }

  onPatternChange(value: string) {
    this.pattern = value;
    this.generateDescription();
  }

  onTimeChange(value: string) {
    this.time = value;
    this.generateDescription();
  }

  toggleDay(day: string) {
    this.selectedDays[day] = !this.selectedDays[day];
    this.generateDescription();
  }

  onDateChange(value: string) {
    this.date = value;
    this.generateDescription();
  }

  generateDescription() {
    const timeStr = this.formatTime(this.time);

    if (this.pattern === 'daily') {
      this.description = `Runs every day at ${timeStr}.`;
    }
    else if (this.pattern === 'weekly') {
      const days = this.getDaysKeys();
      if (days.length > 0) {
        this.description = `Runs every week on ${days.join(', ')} at ${timeStr}.`;
      } else {
        this.description = `Runs every week at ${timeStr}.`;
      }
    }
    else if (this.pattern === 'monthly') {
      const dateWithSuffix = this.ordinalSuffix(this.date);
      this.description = `Runs every month on the ${dateWithSuffix} day at ${timeStr}.`;
    }
  }

  getDaysKeys() {
    return Object.keys(this.selectedDays)
      .filter(day => this.selectedDays[day])
      .map(day => this.capitalize(day));
  }

  capitalize(day: string): string {
    return day.charAt(0).toUpperCase() + day.slice(1);
  }

  ordinalSuffix(day: string): string {
    const num = parseInt(day, 10);
    if ([11, 12, 13].includes(num % 100)) return `${num}th`;
    switch (num % 10) {
      case 1: return `${num}st`;
      case 2: return `${num}nd`;
      case 3: return `${num}rd`;
      default: return `${num}th`;
    }
  }

  private formatTime(time: string): string {
    // Keep HH:mm format from input (24-hour)
    return time;
  }
}
