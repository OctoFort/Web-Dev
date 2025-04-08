import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacancy} from '../interfaces/vacancy';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = "http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) {

  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}/companies`)
  }

  getCompanyById(id:number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}/`)
  }

  getVacanciesByCompanyId(id:number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${id}/vacancies`)
  }
}
