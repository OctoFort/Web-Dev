import {Component, inject, OnInit} from '@angular/core';
import { CompanyService} from '../services/company.service';
import {Company} from '../interfaces/company';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ul>
      <li *ngFor="let company of companies">
        id: {{company.id}}
        name: {{company.name}}
        <a [routerLink]="[company.id]">DETAILS</a>
      </li>
    </ul>
  `,
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];
  companyService = inject(CompanyService)
  ngOnInit() {
    this.companyService.getCompanies().subscribe(data =>{
      this.companies = data;
    })
  }

}
