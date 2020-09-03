import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from './models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getImage(imageUrl: string): Observable<Image> {
    return this.httpClient.get<Image>(imageUrl);
  }    

}
