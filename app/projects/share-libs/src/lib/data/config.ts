import { Reason } from '@libs/enum/config-enum';
import { Holiday, WorkingPeriod } from '@libs/interface/config-interface';
import { CommonOption } from '@libs/interface/dropdown-interface';

/**
 * 補登原因選單
 *
 * @returns {*} 補登原因選單
 */
export const reasonOptions = (): CommonOption[] => {
  const list: CommonOption[] = [];
  for (const key in Reason) {
    list.push({
      name: Reason[key as keyof typeof Reason],
      code: key,
    });
  }
  return list;
};

/**
 * 上下班時間
 */
export const workingPeriods: WorkingPeriod[] = [
  {
    group: 'group1',
    start: '08:30',
    end: '17:00',
  },
  {
    group: 'group2',
    start: '09:00',
    end: '17:30',
  },
  {
    group: 'group3',
    start: '09:30',
    end: '18:00',
  },
];

/**
 * 國定假日
 */
export const holidays: Holiday[] = [
  {
    title: '元旦',
    dates: [new Date('2023/01/01'), new Date('2023/01/02')],
  },
  {
    title: '春節',
    dates: [
      new Date('2023/01/20'),
      new Date('2023/01/21'),
      new Date('2023/01/22'),
      new Date('2023/01/23'),
      new Date('2023/01/24'),
      new Date('2023/01/25'),
      new Date('2023/01/26'),
      new Date('2023/01/27'),
      new Date('2023/01/28'),
      new Date('2023/01/29'),
    ],
  },
  {
    title: '二二八',
    dates: [
      new Date('2023/02/25'),
      new Date('2023/02/26'),
      new Date('2023/02/27'),
      new Date('2023/02/28'),
    ],
  },
  {
    title: '清明節',
    dates: [
      new Date('2023/04/01'),
      new Date('2023/04/02'),
      new Date('2023/04/03'),
      new Date('2023/04/04'),
      new Date('2023/04/05'),
    ],
  },
  {
    title: '勞動節',
    dates: [
      new Date('2023/04/29'),
      new Date('2023/04/30'),
      new Date('2023/05/01'),
    ],
  },
  {
    title: '端午節',
    dates: [
      new Date('2023/06/22'),
      new Date('2023/06/23'),
      new Date('2023/06/24'),
      new Date('2023/06/25'),
    ],
  },
  {
    title: '中秋節',
    dates: [
      new Date('2023/09/29'),
      new Date('2023/09/30'),
      new Date('2023/10/01'),
    ],
  },
  {
    title: '國慶日',
    dates: [
      new Date('2023/10/07'),
      new Date('2023/10/08'),
      new Date('2023/10/09'),
      new Date('2023/10/10'),
    ],
  },
];
