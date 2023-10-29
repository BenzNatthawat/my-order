import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent {
  @Input() src = '';
  @Input() alt = '';

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = './assets/images/image-error.png'
  }
}
