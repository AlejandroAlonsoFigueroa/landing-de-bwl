import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mp3-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit {

  reveal: boolean;

  @Input () type          : string;
  @Input () label         : string;
  @Input () for           : string;
  @Input () autocomplete  : string;
  @Input () name          : string;
  @Input () hasError      : any;
  @Output () value: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  handleChange(event) {
    this.value.emit(event.target.value)
  }

  revealPassword() {
    this.reveal ? this.reveal = false : this.reveal = true;
    this.reveal ? this.type = "text" : this.type = "password";
  }

}
