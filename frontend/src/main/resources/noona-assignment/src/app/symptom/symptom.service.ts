import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { Symptom } from './symptom';
import { Recommendation } from '../recommendation/recommendation';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  private symptomsApiUrl = 'api/symptom';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) { }

  getSymptoms(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.symptomsApiUrl)
    .pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  postSymptom(symptom: Symptom): Observable<Recommendation> {
    return this.http.post<Recommendation>(
      this.symptomsApiUrl,
      symptom,
      this.httpOptions)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  deleteSymptom(id: string): Observable<Symptom> {
    return this.http.delete<Symptom>(
      `${this.symptomsApiUrl}/${id}`,
      this.httpOptions)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
