import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: 'appBasicHighlight'
}) 
// to configure directive we need to add an object
    //selector is needed to add a name that wil define that it is a directive
// it must be unique selector
//[]this will allow you to add it as an attribute without braces
    export class BasicHighlightDirective implements OnInit {
        constructor(private elementRef: ElementRef) {
        }

    ngOnInit(){
        this.elementRef.nativeElement.backgroundColor = 'green'
    }
}