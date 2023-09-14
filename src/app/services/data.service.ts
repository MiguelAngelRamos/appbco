import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../interfaces/IPosts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //* GET - Vamos a traer todos los posts
  getPosts():Observable<IPosts[]> {
    return this.http.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //* React, Vue (fetch y axios => para realizar el llamado hacia Api Rest)

  //* HttpClient (para hacer llamados al Api Rest)
}
