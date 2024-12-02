import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
