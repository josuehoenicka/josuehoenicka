import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Projects, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
