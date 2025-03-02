import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AlbumsService} from '../services/albums.service';
import {Photo} from '../interfaces/photo';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `
    <h2>Album Photos ID: {{ id }}</h2>
    <button [routerLink]="['/albums']">Return</button>
    <div class="photos-container">
      <div class="photo-item" *ngFor="let photo of photos">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>

  `,
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent{
  photos: Photo[] = [];
  id: number = 0;
  private route:ActivatedRoute = inject(ActivatedRoute);
  private albumsService: AlbumsService = inject(AlbumsService);
  constructor() {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(this.id).subscribe(
      (data: Photo[]) => {
        this.photos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
