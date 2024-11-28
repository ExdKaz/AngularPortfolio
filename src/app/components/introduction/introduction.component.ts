import { Component } from '@angular/core';
import { LABELS } from '../../../shared/Labels';
import { PrimeNgModule } from '../../../shared/prime-ng.module';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  constructor() {
    this.LABELS = LABELS.intoduction;
  }
  LABELS: any;
}
