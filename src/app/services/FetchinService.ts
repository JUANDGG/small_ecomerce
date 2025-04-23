import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {API_ROUTES } from '../util/struturesApi';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FetchinService {

  private _uriApi =  API_ROUTES.COMPLETE
  private _data = signal([])

  readonly data =this._data;


  constructor(private http: HttpClient ) {}
  
  getDataObservable<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this._uriApi + endpoint);
  }
   
  }