import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(list:any): any {
      return list.length ? list[ Math.floor(Math.random() * list.length) ] : "" ;
  }

}
