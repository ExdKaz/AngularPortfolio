import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ToastMessageComponent } from "../toast-message/toast-message.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, IntroductionComponent, ProjectsComponent, ExperienceComponent, ToastMessageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
