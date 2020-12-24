import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'camera-action-panel',
  templateUrl: './camera-action-panel.component.html',
  styleUrls: ['./camera-action-panel.component.scss'],
})
export class CameraActionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Output('imageSelcted') imageSelectedEvent = new EventEmitter()
  @Output('imageCaptured') imageCapturedEvent = new EventEmitter()
  @Output('flipCamera') flipCameraEvent = new EventEmitter()

  imageSelected(e){
this.imageSelectedEvent.emit(e)
  }
  imageCaptured(){
    this.imageCapturedEvent.emit()
  }
  flipCamera(){
    this.flipCameraEvent.emit()
  }
}
