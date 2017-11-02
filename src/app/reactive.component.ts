import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {MovieService} from './service/movie.service'
import {Movie} from './moviesclass/movies'
declare const alertify: any;
@Component({
  selector: 'app-root',
  templateUrl: './reactive.component.html',
   styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [MovieService]

})
export class AppComponent implements OnInit {

  movieArray:Movie[]=[]
  movieDetail:Movie
  movies:Movie[]
  movieForm:FormGroup

  constructor(private movieService:MovieService,private fb:FormBuilder){}

  ngOnInit(){}
  
  addMovies(values)
  {
      this.movieDetail={
          movieName:values.name,
     movieDescription:values.description,
     movieRating:values.rating,
     ReleaseDate:values.dat

      }
    this.movies.push(this.movieDetail)
    this.movieService.addMovies(this.movieDetail)
    
    this.movieArray=this.movieService.getMovies()
    alertify.notify('movie Added Successfully','success',1)
  }
 resetForm() {
    this.movieForm.reset();
  };


}