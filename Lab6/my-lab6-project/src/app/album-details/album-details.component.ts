import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AlbumsService} from '../services/albums.service';
import {Album} from '../interfaces/album';
import {HttpErrorResponse} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-album-details',
  imports: [
    RouterLink,
    FormsModule
  ],
  template: `
    <div class="album-details-card">
      <h2>Album Details</h2>

      <div class="detail-row">
        <label>User ID:</label>
        <span>{{ album.userId }}</span>
      </div>

      <div class="detail-row">
        <label>Album ID:</label>
        <span>{{ album.id }}</span>
      </div>

      <div class="detail-row">
        <label>Title:</label>
        <input [(ngModel)]="newTitle" />
      </div>

      <div class="buttons-container">
        <button [routerLink]="['/albums', album.id, 'photos']" class="photos">Photos</button>
        <button (click)="saveAlbum()">Save</button>
        <button [routerLink]="['/albums']">Return</button>
      </div>
    </div>

  `,
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {

  album: Album = {userId:0,id:0,title:""};
  newTitle: string = "";

  private route:ActivatedRoute = inject(ActivatedRoute);
  private albumsService: AlbumsService = inject(AlbumsService);

  ngOnInit(): void {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(
      (data: Album) => {
        this.album = data;
        this.newTitle = data.title;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  saveAlbum(){
    this.album.title = this.newTitle;
    this.albumsService.updateAlbum(this.album).subscribe(
      (error) =>{
        console.log(error);
      }
    )
  }
}
