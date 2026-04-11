import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-interculturality',
  imports: [RouterLink],
  templateUrl: './interculturality.html',
  styleUrl: './interculturality.scss',
})
export class Interculturality {
  readonly i18n = inject(I18nService);
}
