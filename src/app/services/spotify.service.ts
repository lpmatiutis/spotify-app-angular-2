import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify service listo!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCbKidWU91LK3lOClr39bIOgeHQTFlhgPo1RqLNFeoRt74eCMTSgw2i19PL-oo4AySOIREh83iIAoC-pd0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
                  .pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCbKidWU91LK3lOClr39bIOgeHQTFlhgPo1RqLNFeoRt74eCMTSgw2i19PL-oo4AySOIREh83iIAoC-pd0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
                  .pipe( map( data => data['artists'].items));

  }
}
