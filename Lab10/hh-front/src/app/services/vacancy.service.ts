import { Injectable } from '@angular/core';
import { Vacancy } from '../interfaces/vacancy';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = "http://127.0.0.1:8000/api"

  constructor(private http:HttpClient) { }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/`)
  }

  getVacancyById(id:number): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.baseUrl}/vacancies/${id}/`)
  }
}
