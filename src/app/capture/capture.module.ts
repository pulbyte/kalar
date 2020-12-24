import { CameraActionPanelComponent } from './components/camera-action-panel/camera-action-panel.component';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { ResultActionPanelComponent } from './components/result-action-panel/result-action-panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturePageRoutingModule } from './capture-routing.module';

import { CapturePage } from './capture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturePageRoutingModule
  ],
  entryComponents : [ResultModalComponent],
  declarations: [CapturePage, ResultActionPanelComponent, ResultModalComponent, CameraActionPanelComponent]
})
export class CapturePageModule {}
