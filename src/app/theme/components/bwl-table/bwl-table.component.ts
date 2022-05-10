import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Input,
  ViewEncapsulation}
  from "@angular/core";

@Component({
  selector: 'bwl-table-component',
  templateUrl: 'bwl-table.component.html',
  styleUrls: ['bwl-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BWLTableComponent implements OnInit {

  @ViewChild('componentFactory', { read: ViewContainerRef })
  private componentFactory                   : ViewContainerRef;

  @Input() dataSource                 : any               =   [];
  @Input() columnDef                  : any               =   [];
  @Input() fullCellRenderedComponent  : any               =   null;

  constructor(
    private componenteFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  showTableDetail(item, itemIndex){
    this.dataSource.forEach((d, index)=> {
      if (itemIndex == index){
        d.expanded = !d.expanded;
      } else {
      }
    });
    this.getComponent(item)
  }

  getComponent(data){
    setTimeout(()=> {
      if(!this.componentFactory){
        return null;
      }else {
        if (this.fullCellRenderedComponent) {
          let expComponent: any = this.componentFactory.createComponent(this.componenteFactoryResolver.resolveComponentFactory(this.fullCellRenderedComponent));
          if (expComponent.instance) {
            expComponent.instance.dataFromParent = data;
            expComponent.instance.fullDataFromParent = this.dataSource;
          }
        }
      }
    });
  }
}
