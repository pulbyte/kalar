import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'result-action-panel',
  templateUrl: './result-action-panel.component.html',
  styleUrls: ['./result-action-panel.component.scss'],
})
export class ResultActionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hlo - action')
  }
  @Output('exit') exitComponent = new EventEmitter()

  downloadResult(){

  }
  shareResult(){

  }
  goBack(){
this.exitComponent.emit()
  }
}
