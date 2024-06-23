import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//Directiva para cambiar el color con hover
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightConfig: any;

  constructor(private el: ElementRef) {}
    //Cambio de color al pasar el mouse por encima
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(
      this.highlightConfig.hoverColor,
      this.highlightConfig.hoverTextColor
    );
  }
  //Cambio de color al quitar el mouse
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(
      this.highlightConfig.backgroundColor,
      this.highlightConfig.color
    );
  }

  private highlight(bgColor: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = textColor;
  }
}
