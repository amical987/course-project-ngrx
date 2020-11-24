import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleDropdown(){
        this.isOpen = !this.isOpen;
    }
 // @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
      //  this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      // }
      // constructor(private elRef: ElementRef) {}
}
