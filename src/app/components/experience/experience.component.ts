import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  LABELS: any;

  constructor() {
    this.LABELS = LABELS.experience;
  }

  ngOnInit() {
    this.calculateExperiencePerCompany();
  }

  calculateExperiencePerCompany() {
    const accordian = this.LABELS.ACCORDIAN;

    for (let i = 0; i < accordian.length; i++) {
      const current = accordian[i];
      const next = accordian[i + 1];

      const startDate = this.parseDate(current.content.joiningDate);
      const endDate = next
        ? this.parseDate(next.content.joiningDate)
        : new Date(); // last company → present

      current.content.experience = this.getExperienceBetween(startDate, endDate);
    }
  }

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  getExperienceBetween(start: Date, end: Date): string {
    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (end.getDate() < start.getDate()) {
      months--;
    }

    months = Math.max(months, 0);

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = '';
    if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
    if (remainingMonths > 0) result += `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;

    return result.trim() || '0 months';
  }
}
