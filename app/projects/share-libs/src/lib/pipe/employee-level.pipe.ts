import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '@libs/enum/employee-enum';

/**
 * 員工職稱
 */
@Pipe({
  name: 'employeeLevel',
})
export class EmployeeLevelPipe implements PipeTransform {
  /**
   * transform
   *
   * @param {string} value value
   * @returns {string} 職等
   */
  transform(value: string): string {
    return Level[value as keyof typeof Level];
  }
}
