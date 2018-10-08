import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post('https://reqres.in/api/login', { email: email, password: password })
            .pipe(map(user => {
                return user;
            }));
    }
}