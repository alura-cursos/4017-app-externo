import { Component } from '@angular/core';
import { ButtonComponent } from '@alfabit-alura/button';
import { TypographyComponent } from '@alfabit-alura/typography';
import { ModalComponent } from '@alfabit-alura/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, TypographyComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  modalOpen = false;
}
