import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item as Item } from './item';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  // apiURL = 'http://157.230.186.10/api/db.json';
  apiURL = 'http://my-json-server.typicode.com/sen0ch/db';
  // apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getItems(): Observable<Item> {
    return this.http.get<Item>(this.apiURL + '/items')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getItem(id): Observable<Item> {
    return this.http.get<Item>(this.apiURL + '/items/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  createItem(item): Observable<Item> {
    return this.http.post<Item>(this.apiURL + '/items', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateItem(id, item): Observable<Item> {
    return this.http.put<Item>(this.apiURL + '/items/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteItem(id) {
    return this.http.delete<Item>(this.apiURL + '/items/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // client-side error
       errorMessage = error.error.message;
     } else {
       // server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
