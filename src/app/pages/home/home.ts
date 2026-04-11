import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Education } from '../../components/education/education';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Experience, Education, Contact],
  template: `
    <app-hero />
    <app-skills />
    <app-experience />
    <app-education />
    <app-contact />
  `,
})
export class Home {}
