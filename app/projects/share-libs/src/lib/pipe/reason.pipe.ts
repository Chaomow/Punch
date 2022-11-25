import { Pipe, PipeTransform } from '@angular/core';
import { Reason } from '@libs/enum/config-enum';

/**
 * 補登原因
 */
@Pipe({
  name: 'reason',
})
export class ReasonPipe implements PipeTransform {
  /**
   * transform
   *
   * @param {string} value value
   * @returns {string} 補登原因
   */
  transform(value: string): string {
    return Reason[value as keyof typeof Reason];
  }
}
