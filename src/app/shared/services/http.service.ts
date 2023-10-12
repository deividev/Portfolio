import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '@core/constants/global';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getObservable(url: string, prefixApi?: string): Observable<any> {
    if (GLOBAL.DUMMY) {
      return this.httpClient.get(GLOBAL.API_MOCK + url)
    }
    return this.httpClient.get(url)
  }
}
