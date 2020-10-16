import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Champion} from "../models/Champion"
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
    championsUrl = 'assets/champion.json';
    getChampions() {
        return this.http.get<Champion>(this.championsUrl);
    }
}