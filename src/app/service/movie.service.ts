import { Injectable } from '@angular/core';

import { Movie } from '../moviesclass/movies';
import { MOVIES } from './mock.movies';

@Injectable()
export class MovieService {
    movieList:Movie[]=[]
  getMovies(): Movie[]{
    return MOVIES
  }

  addMovies(movieDetail:Movie)
  {
      this.movieList.unshift(movieDetail)
  }
 
}
