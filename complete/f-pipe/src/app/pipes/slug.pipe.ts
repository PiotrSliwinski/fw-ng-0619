import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(value: string, domain:string ): any {

        const FILE_EXT = ".html";

        value = value.trim().split(" ").join("-").toLowerCase();
        value = domain ? domain + value + FILE_EXT : value + FILE_EXT;

        return value;

  }
}
