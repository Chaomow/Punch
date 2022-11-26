import { PunchReason, PunchType } from '@libs/enum/punch-enum';
import { Attendance } from '@libs/interface/punch-interface';

export const punchRecord: Attendance[] = [
  {
    id: 1,
    employeeId: '1001',
    date: new Date('2022/11/24'),
    type: 'Start',
    time: new Date('2022/11/24 09:15:00.000'),
    create: new Date('2022/11/24 09:15:00.000'),
  },
  {
    id: 2,
    employeeId: '1001',
    date: new Date('2022/11/24'),
    type: 'End',
    time: new Date('2022/11/24 18:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: PunchReason.Forget,
  },
  {
    id: 3,
    employeeId: '1001',
    date: new Date('2022/11/25'),
    type: 'End',
    time: new Date('2022/11/24 18:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: 'Other',
  },
  {
    id: 4,
    employeeId: '1002',
    date: new Date('2022/11/25'),
    type: 'Start',
    time: new Date('2022/11/25 09:15:00.000'),
    create: new Date('2022/11/25 09:15:00.000'),
  },
  {
    id: 5,
    employeeId: '1002',
    date: new Date('2022/11/26'),
    type: 'Start',
    time: new Date('2022/11/26 09:00:00.000'),
    create: new Date('2022/11/26 14:10:00.000'),
    modify: new Date('2022/11/26 14:10:00.000'),
    reason: PunchReason.Forget,
  },
];
