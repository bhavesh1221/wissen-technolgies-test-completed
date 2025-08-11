import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cron-expression-evaluator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cron-expression-evaluator.component.html',
  styleUrls: ['./cron-expression-evaluator.component.css']
})
export class CronExpressionEvaluatorComponent {
  cronExpression: string = '';
  cronFields = { seconds: '*', minutes: '*', hours: '*', days: '*', month: '*', dayOfWeek: '*' };
  activeFields = { seconds: false, minutes: false, hours: false, days: false, month: false, dayOfWeek: false };

  onCronChange(value: string | Event) {
    // Agar event type change hua ho to string nikal lo
    if (typeof value !== 'string') {
      const inputElement = value.target as HTMLInputElement;
      value = inputElement?.value || '';
    }

    const trimmed = value.trim().replace(/\s+/g, ' '); // Extra spaces hatao
    const parts = trimmed.split(' ');

    if (parts.length !== 6) {
      // Invalid cron expression => reset fields
      this.resetFields();
      return;
    }

    // Fields mapping
    const [seconds, minutes, hours, days, month, dayOfWeek] = parts;

    this.cronFields.seconds = seconds;
    this.cronFields.minutes = minutes;
    this.cronFields.hours = hours;
    this.cronFields.days = days;
    this.cronFields.month = month;
    this.cronFields.dayOfWeek = dayOfWeek;

    // Active field check (agar '*' nahi hai to active)
    this.activeFields.seconds = seconds !== '*';
    this.activeFields.minutes = minutes !== '*';
    this.activeFields.hours = hours !== '*';
    this.activeFields.days = days !== '*';
    this.activeFields.month = month !== '*';
    this.activeFields.dayOfWeek = dayOfWeek !== '*';
  }

  private resetFields() {
    this.cronFields = { seconds: '*', minutes: '*', hours: '*', days: '*', month: '*', dayOfWeek: '*' };
    this.activeFields = { seconds: false, minutes: false, hours: false, days: false, month: false, dayOfWeek: false };
  }
}