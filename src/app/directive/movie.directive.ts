import {Directive,HostListener,ElementRef} from '@angular/core'

@Directive({
    selector:'[myMovieDirective]'
})

export class MovieDirective
{
    constructor(private el:ElementRef){}
    @HostListener('mouseover') onMouseOver()
    {
        this.changeBackgroundColor('blue');
    }
    @HostListener('mouseleave') onMouseLeave()
    {
        this.changeBackgroundColor('gray');
    }
   @HostListener('document:keyup', ['$event.target'])
  onkeypress(document:any) {
     var text=EventTarget.length
    switch (text) {
      case 1:
        this.changeBackgroundColor('Blue');
        break;
      case 2:
        this.changeBackgroundColor('Blue');
        break;
      case 3:
        this.changeBackgroundColor('Green');
        break;
      case 5:
        this.changeBackgroundColor('Maroon');
        break;
      default:
        this.changeBackgroundColor('gray');
        break;
       
    }
    
  }
    
    private changeBackgroundColor(color: string)
    {
       this.el.nativeElement.style.backgroundColor=color;
    }
}
