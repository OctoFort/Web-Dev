import {Component, inject, OnInit} from '@angular/core';
import {Company} from '../interfaces/company';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute} from '@angular/router';
import {Vacancy} from '../interfaces/vacancy';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Company details:</p>
    <ul>
      <li>id: {{company.id}}</li>
      <li>name: {{company.name}}</li>
      <li>description: {{company.description}}</li>
      <li>address: {{company.address}}</li>
      <li>city: {{company.city}}</li>
    </ul>
    <br>

    <p>Vacancies:</p>
    <ul>
      <li *ngFor="let vacancy of vacancies">
        vacancy id: {{vacancy.id}}
        vacancy name: {{vacancy.name}}
      </li>
    </ul>
  `,
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit{
  company!: Company;
  vacancies!: Vacancy[];

  private route = inject(ActivatedRoute)
  private companyService = inject(CompanyService)
  ngOnInit() {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompanyById(id).subscribe(data =>
      this.company = data
    );
    this.companyService.getVacanciesByCompanyId(id).subscribe(data =>
      this.vacancies = data
    );
  }

}
