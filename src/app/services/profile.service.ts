import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '18445332';
  private clientsecret = 'e10249fa54fb5ef332665d74db12d708ffe45281';

  constructor(private http: Http) {
    console.log('service is now ready');
    this.username = 'KevinJared';
  }

    getProfileInfo() {
      // tslint:disable-next-line:max-line-length
      return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .map(res => res.json());
    }

    getProfileRepos(){
       // tslint:disable-next-line:max-line-length
       return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
       .map(res => res.json());
    }
    updateProfile(username: string) {
      this.username = username;
    }
}
