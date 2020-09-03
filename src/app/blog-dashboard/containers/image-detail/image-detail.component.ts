import { Component, OnInit } from '@angular/core';
import { ImageService } from './../../image.service';
import { Image } from './../../models/image.interface';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  name = 'Angular upload and get files';
  
  // imgUrl: string = 'http://localhost:8000/images/2';
  imgUrl: string = 'http://localhost:8000/images/1';
  
  imageToShow: any;
  isImageLoading: boolean;
  
  constructor(private imageService: ImageService) {}
  
  
  getImageFromService() {
    this.isImageLoading = true;
    this.imageService.getImage(this.imgUrl).subscribe(result => {
      console.log(result);
      // this.createImageFromBlob(result);
      this.imageToShow = result.imageUrl;
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
  
  
  
  
  ngOnInit(): void {
  }
  
}
