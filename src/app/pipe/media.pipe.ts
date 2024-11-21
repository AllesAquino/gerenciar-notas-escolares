import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(objeto:any): number {
    let total = objeto.primeiraNota + objeto.segundaNota;
    let media = total / 2;
    return media;
  }

}
