import {
  environment
} from './../../../environments/environment.prod';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  from,
  observable,
  Observable
} from 'rxjs';

import {
  deepAiApiKey
} from './../../backend/api';
// Api key related to the author, Use your own by setting deepAiApiKey field in environment.ts file 

@Injectable({
  providedIn: 'root'
})
export class ImageColorizerService {
  apiKey: string;
  constructor(private http: HttpClient) {
    this.apiKey = deepAiApiKey || environment.deepAiApiKey
  }


  colorizeImage(data) {

    return from(this.http.post(environment.deepAiColorizerApiUrl,data, {
        headers: new HttpHeaders().set('api-key', this.apiKey),
      }

    ))


  }
}