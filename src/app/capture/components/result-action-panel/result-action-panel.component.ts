import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'result-action-panel',
  templateUrl: './result-action-panel.component.html',
  styleUrls: ['./result-action-panel.component.scss'],
})
export class ResultActionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  @Output('exit') exitComponent = new EventEmitter()
  @Output('share') shareImage = new EventEmitter()
  @Input('imageUrl') image


  shareResult(){
    this.shareImage.emit()


  }
  goBack(){
this.exitComponent.emit()
  }
}
