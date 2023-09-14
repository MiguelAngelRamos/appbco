import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/IPhoto';
import { DataPhotoService } from 'src/app/services/data-photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos:IPhoto[] = [];
  constructor(private httpPhotoService: DataPhotoService) {

  }
  //* control + .
  ngOnInit(): void {
    this.httpPhotoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }


}
