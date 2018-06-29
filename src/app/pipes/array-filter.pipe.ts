import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class ArrayFilterPipe implements PipeTransform {

  transform(array: Array<any>, arg: any): any {
    let filteredArray = array;
    if (filteredArray) {
      for (const key in arg) {
        /**
         * convert search string to regular expression for case insensitive search
         */
        if (arg.hasOwnProperty(key)) {
          let filterText: string = arg[key] || '';
          filterText = filterText.toLowerCase();
          /**
          * Filter array by matching search query and value
          */
          filteredArray = filteredArray.filter(
            (item) => {
              if (item.hasOwnProperty(key)) {
                const propertyValue = item[key] ? item[key].toString().toLowerCase() : '';
                // item[key] = item[key] ? item[key].toString().toLowerCase() : '';
                if (propertyValue.indexOf && propertyValue.indexOf(filterText) < 0) {
                  return false;
                }
              }
              return true;
            }
          );

        }
      }
    }
    return filteredArray;
  }

}
