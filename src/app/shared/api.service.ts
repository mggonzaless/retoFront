import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

//import { debug } from 'util';


@Injectable()
export class ApiService {
  /**
   * Servicio que realizar peticiones http al servidor. Activa spiner y notifica el estado de la peticion mediante toast. Si se producen errores genericos los notifica.
   * @constructor
   * @param _http 
   * @param _logger 
   * @param _notificationPool 
   * @param _spinner 
   */
  constructor(
    private _http: HttpClient,

  ) { }

  /**
   * Realiza una peticion http get
   * @param url    Url de la peticion
   * @param cache  habilita cache (opcional)
   */
  public get(url: string, cache = true): Observable<any> {

    this.preRequest();
    let data = new Observable(observer => {
      this._http.get(url).subscribe(result => {
        this.handleSuccess(observer, result);
      },
        (error) => { this.handleError(observer, error); }
      );
    });

    return data;
  }

  /**
  * Realiza una peticion http get para obtener un archivo, retornando un blob
  * @param url    Url de la peticion
  * @param cache  habilita cache (opcional)
  */
  public getFile(url: string, cache = true): Observable<any> {
    this.preRequest();
    let data = new Observable(observer => {
      const httpOptions = {
        responseType: 'blob' as 'json',
      };
      this._http.get(url, httpOptions).subscribe(result => {
        this.handleSuccess(observer, result);
      },
        (error) => { this.handleError(observer, error); }
      );
    });

    return data;
  }

  /**
   * Realiza una peticion http post
   * @param url   url de la peticion
   * @param data  datos json que son enviados en el cuerpo de la peticion
   */
  public post(url: string, data: any): Observable<any> {
    this.preRequest();
    let obs = new Observable(observer => {
      this._http.post(url, data).subscribe(result => {
        this.handleSuccess(observer, result);
      },
        error => { this.handleError(observer, error); }
      );
    });
    return obs;
  }

  /**
  * Realiza una peticion http put
  * @param url   url de la peticion
  * @param data  datos json que son enviados en el cuerpo de la peticion
  */
  public put(url: string, data: any): Observable<any> {
    this.preRequest();
    let obs = new Observable(observer => {
      this._http.put(url, data).subscribe(result => {
        this.handleSuccess(observer, result);
      },
        error => { this.handleError(observer, error); }
      );
    });
    return obs;
  }

  /**
  * Realiza una peticion http delete
  * @param url   url de la peticion
  * @param data  datos json que son enviados en el cuerpo de la peticion
  */
  public delete(url: string, data: any): Observable<any> {

    this.preRequest();
    let obs = new Observable(observer => {
      this._http.delete(url + `/${data}`).subscribe(result => {
        this.handleSuccess(observer, result);
      },
        error => { this.handleError(observer, error); }
      );
    });
    return obs;
  }






  private preRequest() {

  }

  private handleSuccess(observer: Subscriber<any>, result: any) {

    observer.next(result);
    observer.complete();
  }

  private handleError(observer: Subscriber<any>, error: HttpErrorResponse) {

    observer.error(error);
  }

}
