import { Pipe, PipeTransform } from '@angular/core';
import { Level, Department } from '@libs/enum/employee-enum';

/**
 * 員工Pipe
 */
@Pipe({
  name: 'employee',
})
export class EmployeePipe implements PipeTransform {
  /**
   * transform
   *
   * @param {string} value value
   * @param {string} type type
   * @returns {string} transform value
   */
  transform(value: string, type: 'level' | 'department'): string {
    switch (type) {
      case 'level':
        return Level[value as keyof typeof Level];
      case 'department':
        return Department[value as keyof typeof Department];
    }
  }
}
