import {Component, inject, OnInit} from '@angular/core';
import {Vacancy} from '../interfaces/vacancy';
import {VacancyService} from '../services/vacancy.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <ul>
      <li *ngFor="let vacancy of vacancies">
        id: {{vacancy.id}}
        name: {{vacancy.name}}

      </li>
    </ul>
  `,
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[]=[]
  vacancyService = inject(VacancyService)
  ngOnInit() {
    this.vacancyService.getVacancies().subscribe(data =>{
      this.vacancies = data;
    })
  }

}
