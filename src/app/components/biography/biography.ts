import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.html',
  styleUrl: './biography.scss',
})
export class Biography {
  readonly i18n = inject(I18nService);
}
