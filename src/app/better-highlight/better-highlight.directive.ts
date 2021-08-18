import { HostBinding,
  HostListener, 
  Input, 
  Renderer2 } from '@angular/core';
import { Directive, 
  ElementRef, 
  OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input('appBetterHighlight') highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false)
    // we add an method for execute
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false)
    // we add an method for execute
    this.backgroundColor = this.defaultColor;
  }
}
