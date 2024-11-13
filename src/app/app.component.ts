import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@alfabit-alura/button';
import { TypographyComponent } from '@alfabit-alura/typography';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, TypographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-externo';
}
