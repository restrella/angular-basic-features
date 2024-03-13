import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string | undefined;
  constructor(private el: ElementRef) {}

  // click, change, keyup, keydown, mouseenter, mouseleave
  // @HostListener('mouseenter') onMouseEnter = () => {
  //   this.highlight('yellow');
  // };
  @HostListener('mouseenter') onMouseEnter = () => {
    this.highlight(this.appHighlight ?? 'yellow');
  };

  @HostListener('mouseleave') onMouseLeave = () => {
    this.highlight('');
  };

  private highlight = (color: string) => {
    this.el.nativeElement.style.backgroundColor = color;
  };
}
