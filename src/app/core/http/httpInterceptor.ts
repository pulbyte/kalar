import {
    UiControllersService
} from './../ui/uiComponents.service';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import {
    Observable,
    throwError,
    of
} from 'rxjs';
import {
    retry,
    catchError,
    take,
    switchMap,
    map,
    tap
} from 'rxjs/operators';
import {
    Injectable
} from '@angular/core';
import {
    Router
} from '@angular/router';

@Injectable()
export class RootHttpService implements HttpInterceptor {

    constructor(
        private router: Router,
        private uiService: UiControllersService
    ) {}
    intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

        const request = next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    // window.alert(errorMessage);         
                    let message = error.error.message
                    if (error.status == 0) message = `No internet connection`
                    let header = '';
                    // if(message.includes(',')) message = message.split(',')[1]

                    this.uiService.alert({
                            message: message,
                            header: header
                        })
                        .subscribe()
                    return throwError(message);
                })
            )
        return request
    }


}