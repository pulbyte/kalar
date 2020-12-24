import { Component, EventEmitter,Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'capture-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
})
export class ResultModalComponent implements OnInit {

  constructor() { }
  @Input('data') data;
  ngOnInit() {
    console.log('Hlo')
    console.log('h',this.data)
  }

  @Output('exit') exitEvent = new EventEmitter

  exitModal(){
    this.exitEvent.emit()
  }


}
