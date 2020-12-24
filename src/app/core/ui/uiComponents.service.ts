import {
    Observable
} from 'rxjs';
import {
    Injectable,
    ComponentRef
} from '@angular/core';
import {
    PopoverController,
    ActionSheetController,
    AlertController,
    ToastController,
    LoadingController,
    PickerController
} from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})
export class UiControllersService {

    constructor(
        private popoverCtrl: PopoverController,
        private actionSheetCtrl: ActionSheetController,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
    ) {}


    load_Ob(params, isLoadingBooelan ? ): Observable < any > {
        let isLoading = isLoadingBooelan;
        const observable = new Observable(subscriber => {

            this.loadingCtrl.create({
                    keyboardClose: params.keyboardClose || true,
                    message: params.message || 'Loading...',
                    mode: params.mode || 'ios',
                    translucent: true,
                    spinner: params.spinner || 'crescent',
                    cssClass: params.cssClass || 'loadingSpinnerAlertCss noneBGOpacity'
                })
                .then(popover => {
                    popover.present();
                    subscriber.next(popover)
                });

        })
        return observable
    }
    load_promise(params ? ) {
        return this.loadingCtrl.create({
            keyboardClose: params.keyboardClose || true,
            message: params.message || 'Loading...',
            mode: params.mode || 'ios',
            translucent: true,
            spinner: params.spinner || 'crescent',
            cssClass: params.cssClass || 'loadingSpinnerAlertCss noneBGOpacity'
        })
    }

    defaultAlertButton(subscriber ? ) {
        return [{
            text: 'Okay',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                if (subscriber) subscriber.next('okay')
            }
        }]
    }
    alert(pramas): Observable < any > {
        let buttonSchema = this.defaultAlertButton;
        if (pramas.alertComponent) buttonSchema = pramas.alertComponent
        const observable = new Observable(subscriber => {
            this.alertCtrl.create({
                    translucent: true,
                    mode: 'ios',
                    cssClass: 'alertCtrlCss',
                    header: pramas.header,
                    message: pramas.message,
                    buttons: buttonSchema(subscriber)
                })
                .then(alert => {
                    alert.present();
                });

        })
        return observable
    }
    alert_plane(pramas) {
        let buttonSchema = this.defaultAlertButton;
        if (pramas.alertComponent) buttonSchema = pramas.alertComponent
        this.alertCtrl.create({
            translucent: true,
            mode: 'ios',
            cssClass: 'alertCtrlCss',
            header: pramas.header,
            message: pramas.message,
        }).then(alert => {
            alert.present();
        });
    }
    toast(message, time ? ) {
        this.toastCtrl.create({
                mode: 'ios',
                cssClass: 'toastCtrlCss',
                message: message,
                duration: time || 1600
            })
            .then(alert => {
                alert.present();
            });
    }

    actionSheet(controllerArrFunction): Observable < any > {
        const observable = new Observable(subscriber => {
            this.actionSheetCtrl.create({
                    translucent: true,
                    mode: 'ios',
                    cssClass: 'actionSheetCss',
                    buttons: controllerArrFunction(subscriber)
                })
                .then(aSheet => {
                    aSheet.present();
                });

        })
        return observable
    }




}