import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'bwl-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

  @Input() bgColor   : "blue" | "red";
  @Input() size      : 'small' | 'medium' | 'big';
  @Input() icon      : string;
  @Input() cssClass  : string = '';

  classObject = {};

  constructor() { }

  ngOnInit() {
    this.setClasses();
  }

  setClasses() {
    if (this.bgColor) this.classObject[this.bgColor] = true;
    if (this.size) this.classObject[this.size] = true;
  }

}
