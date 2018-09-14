import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  constructor(
    private http: HttpClient
  ) { }

  public symptoms() {
    this.http.get('api/symptom').subscribe((symptoms) => {
    });
  }
}
