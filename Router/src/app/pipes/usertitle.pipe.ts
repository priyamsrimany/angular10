import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertitle'
})
export class UsertitlePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if(gender.toLowerCase() === 'male')
    {
      name = "Mr. "+name;
    }
    else 
    {
      name = "Mrs. "+name;
    }
    return name;
  }

}
