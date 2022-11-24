import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '@libs/enum/employee-enum';

/**
 * 部門
 */
@Pipe({
  name: 'department',
})
export class DepartmentPipe implements PipeTransform {
  /**
   * transform
   *
   * @param {string} value value
   * @returns {string} 部門
   */
  transform(value: string): string {
    return Department[value as keyof typeof Department];
  }
}
