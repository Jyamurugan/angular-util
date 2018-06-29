import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSortBy'
})

export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, arg: SortOption): any {
    return array ? array.sort(
      (a, b) => {
        const prop1 = a[arg.sortBy] || '';
        const prop2 = b[arg.sortBy] || '';
        return arg.ascending ? compare(prop1, prop2) : -compare(prop1, prop2);
      }
    ) : [];
  }

}

export interface SortOption {
  sortBy: string;
  ascending: boolean;
}

export function compare(a: any, b: any): number {
  if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
  } else {
    if (parseFloat(a) < parseFloat(b)) {
      return -1;
    }
    if (parseFloat(a) > parseFloat(b)) {
      return 1;
    }
  }
  return 0;
}
