import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../interfaces/album';
import {Observable} from 'rxjs';
import {Photo} from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl);
  }

  getAlbum(id:number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/${id}/photos`);
  }
}
