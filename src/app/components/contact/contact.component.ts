import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
