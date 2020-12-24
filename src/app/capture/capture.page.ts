import {
  ResultActionPanelComponent
} from './components/result-action-panel/result-action-panel.component';
import {
  ImageColorizerService
} from './../core/services/image-colorizer.service';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  CameraPreviewOptions,
  CameraPreviewPictureOptions
} from '@capacitor-community/camera-preview';
import {
  Plugins
} from "@capacitor/core"
import {
  LoadingController,
  ModalController
} from '@ionic/angular';
const {
  CameraPreview
} = Plugins
@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
})
export class CapturePage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    private modalController: ModalController,
    private ImageColorizerService: ImageColorizerService) {}

  ngOnInit() {
    CameraPreview.start(this.cameraPreviewOptions);
  }
  cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
    quality: 80
  };
  cameraPreviewOptions: CameraPreviewOptions = {
    parent: 'cameraPreview',
    className: 'cameraPreview',
    width: window.screen.width,
    height: window.screen.height,
    toBack: true,
  };

  async captureImage() {
    
    const result = await CameraPreview.capture(this.cameraPreviewPictureOptions);
    const base64PictureData = result.value;
    const imageUrl = `${base64PictureData}`;
    this.formData.set("image", imageUrl)
    await this.presentLoading().then(el => {
      el.present();
      this.ImageColorizerService.colorizeImage(this.formData).subscribe(res => {
        console.log(res)
        el.dismiss()
        this.presentResultModal(res['output_url'])
      })
    })


  }
formData = new FormData
  async imageSelected(inputElement) {
    this.formData.set("image", inputElement.target.files[0])

    await this.presentLoading().then(el => {
      el.present();
      this.ImageColorizerService.colorizeImage(this.formData).subscribe(res => {
        console.log(res)
        el.dismiss()
        console.log(res['output_url'])
        this.presentResultModal(res['output_url'])
      })
    })

  }
  flipCamera() {
    CameraPreview.flip()
  }

  async presentResultModal(data) {
    const modal = await this.modalController.create({
      component: ResultActionPanelComponent,
      componentProps: {
        'data' : data
      }
    })
    await modal.present()
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Uploading',
      mode: 'ios'
      // translucent: true,
      //cssClass: 'custom-class custom-loading',
    });
    return loading
  }
}