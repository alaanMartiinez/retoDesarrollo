import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    private readonly pathVariables: any = {
        platillos: 'search.php?s',
        detallePlatillo: 'lookup.php?i={path}',
        aleatorioPlatillo: 'random.php'
    };

    constructor(private http: HttpClient) {
    }

    get(path: string, params?: any): Observable<any> {
        let destination = baseUrl.url + this.pathVariables[path];
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const regEx = new RegExp(`{${key}}`);
                destination = destination.replace(regEx, params[key]);
            }
        }
        return this.http.get(destination);
    }




}
