import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify service listo!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpAUZGiaBo2ZeFETrZ6eYn8pCyCDo3w24DjCvqqEN26gRGjTwmMxRQiWUX0WlgsDKRibZ2j5Fc3FhMGjk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCpAUZGiaBo2ZeFETrZ6eYn8pCyCDo3w24DjCvqqEN26gRGjTwmMxRQiWUX0WlgsDKRibZ2j5Fc3FhMGjk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=5`, {headers});

  }
}
