import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/interfaces/IPosts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  public posts: IPosts[] = [];

  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe( posts => {
      this.posts = posts;
    });

    //* let users = ['nombre', 'apellido', 'cuidad'] longitud = 3
    //*                  0    ,     1     ,    2
    //* users[2] = cuidad;
  }

}
