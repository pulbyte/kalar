import { Component, EventEmitter,Output, Input, OnInit } from '@angular/core';
import {
  Plugins
} from "@capacitor/core"
import { ModalController } from '@ionic/angular';
import { title } from 'process';

const { Share } = Plugins

@Component({
  selector: 'capture-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
})
export class ResultModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  @Input('data') data;
  ngOnInit() {
    console.log('Hlo')
    console.log('h',this.data)
  }

  @Output('exit') exitEvent = new EventEmitter

  async exitModal(){

    this.exitEvent.emit()
    await this.modalCtrl.dismiss();
  }
shareImage(){
  Share.share({
    title : "Colorized photo",
    url : this.data
  }
   
  )
}

}
