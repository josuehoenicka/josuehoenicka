import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Cert {
  institution: string;
  image: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly i18n = inject(I18nService);
  readonly lightbox = signal<Cert | null>(null);

  readonly certs: Cert[] = [
    { institution: 'UTN', image: 'assets/education/utn-react.jpeg' },
    { institution: 'UBA', image: 'assets/education/uba-english.jpeg' },
    { institution: 'EEMPI', image: 'assets/education/degree.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-angular-avanzado.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-docker-fundamentos.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-flutter.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-fundamentos-arduino.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-laboratorio-angular-prueba.jpeg' },
    { institution: 'Platzi', image: 'assets/education/platzi-n8n-lowcode.jpeg' },
    { institution: 'Argentina Programa', image: 'assets/education/argentinaprograma-seprogramar.jpeg' },
    { institution: 'Argentina Programa', image: 'assets/education/argentinaprograma-yoprogramo.jpeg' },
    { institution: 'Codo a Codo', image: 'assets/education/codoacodo-fullstack.jpeg' },
    { institution: 'freeCodeCamp', image: 'assets/education/freecodecamp-javascript.jpeg' },
    { institution: 'freeCodeCamp', image: 'assets/education/freecodecamp-responsivewebdesign.jpeg' },
    { institution: 'IT Master', image: 'assets/education/masterit-python.jpeg' },
    { institution: 'Movistar', image: 'assets/education/movistar-cyberseguridad.jpeg' },
  ];

  get looped(): Cert[] {
    return [...this.certs, ...this.certs];
  }

  openLightbox(cert: Cert) {
    this.lightbox.set(cert);
  }

  closeLightbox() {
    this.lightbox.set(null);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.closeLightbox();
    }
  }
}
