import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement);
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);  //reference to the actual HTML element
  } 

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
