import { Component, Input,OnInit } from '@angular/core';
import { Movie } from '../moviesclass/movies';
import {MovieService} from '../service/movie.service'


@Component({
  selector: 'add-movie',
  templateUrl:'./addmovies.component.html',
  
  providers:[MovieService] 
 })
export class AddMovieComponent implements OnInit{
  @Input() movieDetail;
  
  constructor(private movieService:MovieService){}
  ngOnInit(){}
}