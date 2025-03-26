import { Injectable } from '@angular/core';
import { Category } from './interface/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/categories/`)
  }
}
