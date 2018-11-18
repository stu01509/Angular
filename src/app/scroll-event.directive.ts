import { Directive, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appNavShrink]'
})
export class ScrollEventDirective implements OnInit {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.color = 'blue';
  }
  @HostBinding('class.change') navShrink: boolean;


  ngOnInit() {
    this.navShrink = false;
  }
  // @HostListener('scroll', ['$event']) onScroll($event: Event): void {
  //   console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
  // }

  // @HostListener('mouseenter', ['appScrollEvent']) mouseEventEnter() {
  //   console.log('mouseenter');
  // }
  // @HostListener('mouseleave', ['appScrollEvent']) mouseEventLeave() {
  //   console.log('mouseleave');
  // }

    @HostListener('window:scroll', ['$event'])
      elemClicked(element, $event) {

        if (element.path[1].scrollY >= 150) {
          this.navShrink = true;
        } else {
          this.navShrink = false;
        }

        if ((element.path[1].innerHeight + 10 + element.path[1].scrollY) >= element.path[0].body.offsetHeight) {
          console.log('// you\'re at the bottom of the page');
        }
        // console.log('scroll', element.path[1].innerHeight, element.path[1].scrollY);
        // console.log('scroll Demo', element.path[1].scrollY,  element.path[1].clientHeight ,  element.path[1].scrollTop );
        console.log('scroll Demo', element.path[1].innerHeight, element.path[1].scrollY, element.path[0].body.offsetHeight);
        // console.log('scroll Demo', element.path[1].pageYOffset);
      }
      // @HostListener('window:scroll', [])
      // onScroll(): void {

      // }
    // @HostBinding('style.color') redColor: boolean;
}
