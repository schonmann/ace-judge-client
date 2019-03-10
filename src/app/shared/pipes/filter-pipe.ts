import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filterFunction: (item: any) => boolean): any {
        if (!items || !filterFunction) {
            return items;
        }
        return items.filter(item => filterFunction(item));
    }
}