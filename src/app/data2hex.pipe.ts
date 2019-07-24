import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data2hex'
})
export class Data2hexPipe implements PipeTransform {

  transform(value: DataView, ...args: number[]): string[] {
    return Array.prototype.map.call(new Uint8Array(value.buffer, args[0], args[1]), x => ('00' + x.toString(16)).slice(-2));
  }

}
