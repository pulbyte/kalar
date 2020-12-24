import { ImageColorizerService } from './services/image-colorizer.service';
import { BackButtonBgblurComponent } from './components/back-button-bgblur/back-button-bgblur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BackButtonBgblurComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BackButtonBgblurComponent,
    ImageColorizerService
  ],
  providers:[
    ImageColorizerService
  ]
})
export class CoreModule { }
