import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { Education } from '../../components/education/education';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Experience, Projects, Education, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-projects />
    <app-education />
    <app-contact />
  `,
})
export class Home {}
