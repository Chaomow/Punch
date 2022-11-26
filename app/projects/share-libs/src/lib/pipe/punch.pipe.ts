import { Pipe, PipeTransform } from '@angular/core';
import { PunchType, PunchReason } from '@libs/enum/punch-enum';

/**
 * 打卡Punch
 */
@Pipe({
  name: 'punch',
})
export class PunchPipe implements PipeTransform {
  /**
   * transform
   *
   * @param {string} value value
   * @param {string} type type
   * @returns {string} transform value
   */
  transform(value: string, type: 'type' | 'reason'): string {
    switch (type) {
      case 'type':
        return PunchType[value as keyof typeof PunchType];
      case 'reason':
        return PunchReason[value as keyof typeof PunchReason];
    }
  }
}
