import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { RouterModule } from '@angular/router';
import { LABELS } from '../../../shared/Labels';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, PrimeNgModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor() {
    this.LABELS = LABELS.navbar;
    this.navItems = this.LABELS.NAVITEMS;
  }
  LABELS: any;
  navItems: any
}
