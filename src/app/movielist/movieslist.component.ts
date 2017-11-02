import { Component, Input } from '@angular/core';
import { Movie} from '../moviesclass/movies'


@Component({
  selector: 'movie-list',
  templateUrl:'./movielist.component.html', 
  styleUrls:['./movieslist.component.css']
    
  
})
export class MovieListComponent {
  @Input() movie: Movie;
  
}
