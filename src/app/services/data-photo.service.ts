import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class DataPhotoService {

  constructor(private http:HttpClient) { }

  getPhotos():Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
