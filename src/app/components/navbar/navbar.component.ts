import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../shared/prime-ng.module';
import { RouterModule } from '@angular/router';
import { LABELS } from '../../../shared/Labels';
import { ContactComponent } from '../contact/contact.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, PrimeNgModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public dialogService: DialogService) {
    this.LABELS = LABELS.navbar;
    this.navItems = this.LABELS.NAVITEMS;
  }
  LABELS: any;
  navItems: any
  ref: DynamicDialogRef | undefined;

  openDialog() {
    this.ref = this.dialogService.open(ContactComponent, {
      header: this.LABELS.MODALTITLE,
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
    });
  }
}
