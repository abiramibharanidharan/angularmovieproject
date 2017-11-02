import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import {MovieService} from './service/movie.service'
import { Movie } from './moviesclass/movies';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html', 
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [MovieService]
})


export class AppComponent  implements OnInit{
  title = 'List of Movies';
  movies : Movie[];
  selectedMovie: Movie;
  movieDetail:Movie
  addmovie:boolean=false
  movieArray:Movie[]=[];
  movieForm:FormGroup
  movieName='';
  movieDescription='';
  movieRating='';
  ReleaseDate=''
  
    //declare the  background color properties
       public background_color="white";
  
   constructor(private movieService: MovieService) { }
   
   // to call the movies to display
  getMovies(): void
  {
    this.movies= this.movieService.getMovies()
  }

  ngOnInit(): void
  {
    this.getMovies();
  }
  
  // add the movies using add method
  addMovies(values){
    this.addmovie=false
    var desc
    //check the description value is available or not
    if (values.movieDescription == null)
    {
      desc = "Not available"
    }
    else
    {
      desc = values.movieDescription
    }
   
    this.movieDetail={
     movieName:values.movieName,
     movieDescription:desc,
     movieRating:values.movieRating,
     ReleaseDate:values.ReleaseDate
   }
    this.movies.push(this.movieDetail)
    this.movieService.addMovies(this.movieDetail)
    this.movieArray=this.movieService.getMovies()
    
  }

  //color the rating using colors method
  colors(value:number)
  {
    if(value==1 || value== 2)
      {
        this.background_color="red"
      }
    else if(value==3 || value==4)
      {
        this.background_color="blue"
      }
      else if(value==5)
      {
        this.background_color="orange"
      }
      else
        {
          this.background_color="white"
        }
  }
  //reset the values to null
   resetForm()
  {
    this.movieName='';
    this.movieDescription='';
   this. movieRating='';
    this.ReleaseDate='';
  }
  add()
  {
    this.addmovie=true
    this.selectedMovie=null
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
 
   
}
