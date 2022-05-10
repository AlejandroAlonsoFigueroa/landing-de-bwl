import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwl-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() image : string;
  @Input() title : string;
  @Input() link  : string;

  constructor() { }

  ngOnInit(): void {
  }

}
