import {Component, inject, OnInit} from '@angular/core';
import {Album} from '../interfaces/album';
import {AlbumsService} from '../services/albums.service';
import {HttpErrorResponse} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [
    RouterLink,
    CommonModule,
  ],
  template:`
    <h2>Albums</h2>
    <ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>

        <div class="buttons-container">
          <button (click)="deleteAlbum(album.id)" class="delete">Delete</button>
          <button [routerLink]="['/albums', album.id, 'photos']" class="photos">Photos</button>
        </div>

      </li>
    </ul>
  `,
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent{
  albums: Album[] = [];

  private albumService: AlbumsService = inject(AlbumsService);

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(
      (data: Album[]) => {
        this.albums = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(
      () => {
        this.albums = this.albums.filter(album => album.id !== id);
      }
    )
  }


}
