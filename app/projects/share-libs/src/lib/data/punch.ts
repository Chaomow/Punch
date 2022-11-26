import { Attendance } from '@libs/interface/punch-interface';
import { PunchReason } from '@libs/enum/punch-enum';
import { WorkingPeriod } from '@libs/interface/config-interface';
import { CommonOption } from '@libs/interface/dropdown-interface';

/**
 * 補登原因選單
 *
 * @returns {*} 補登原因選單
 */
export const reasonOptions = (): CommonOption[] => {
  const list: CommonOption[] = [];
  for (const key in PunchReason) {
    list.push({
      value: key,
      label: PunchReason[key as keyof typeof PunchReason],
    });
  }
  return list;
};

/**
 * 上下班時間選單
 *
 * @returns {*} 上下班時間選單
 */
export const periodOptions = (): CommonOption[] => {
  return workingPeriods.map((p) => ({
    value: p.name,
    label: `${p.work}-${p.offwork}`,
  }));
};

/**
 * 上下班時間
 */
export const workingPeriods: WorkingPeriod[] = [
  {
    name: 'group1',
    work: '08:30',
    offwork: '17:00',
  },
  {
    name: 'group2',
    work: '09:00',
    offwork: '17:30',
  },
  {
    name: 'group3',
    work: '09:30',
    offwork: '18:00',
  },
];

export const punchRecord: Attendance[] = [
  {
    id: 1,
    employeeId: '1001',
    date: new Date('2022/11/24'),
    type: 'work',
    time: new Date('2022/11/24 09:15:00.000'),
    create: new Date('2022/11/24 09:15:00.000'),
  },
  {
    id: 2,
    employeeId: '1001',
    date: new Date('2022/11/24'),
    type: 'offwork',
    time: new Date('2022/11/24 18:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: 'forget',
  },
  {
    id: 3,
    employeeId: '1001',
    date: new Date('2022/11/25'),
    type: 'offwork',
    time: new Date('2022/11/24 18:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: 'other',
  },
  {
    id: 4,
    employeeId: '1002',
    date: new Date('2022/11/25'),
    type: 'work',
    time: new Date('2022/11/25 09:15:00.000'),
    create: new Date('2022/11/25 09:15:00.000'),
  },
  {
    id: 5,
    employeeId: '1002',
    date: new Date('2022/11/26'),
    type: 'work',
    time: new Date('2022/11/26 09:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: 'forget',
  },
];
