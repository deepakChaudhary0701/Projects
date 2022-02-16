import { Pipe, PipeTransform } from "@angular/core"


@Pipe({
    name: 'size'
})
export class TextSizePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value.substr(0,30) + '...'
    }
   
}