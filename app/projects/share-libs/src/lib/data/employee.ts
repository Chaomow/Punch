import { Department, Level } from '@libs/enum/employee-enum';
import { DropdownOption } from '@libs/interface/dropdown-interface';
import { Employee } from '@libs/interface/employee-interface';

/**
 * 職稱選單
 *
 * @returns {*} 職稱選單
 */
export const levelOptions = (): DropdownOption[] => {
  const list: DropdownOption[] = [];
  for (const key in Level) {
    list.push({
      name: Level[key as keyof typeof Level],
      code: key,
    });
  }
  return list;
};

/**
 * 部門選單
 *
 * @returns {*} 職稱選單
 */
export const deptOptions = (): DropdownOption[] => {
  const list: DropdownOption[] = [];
  for (const key in Department) {
    list.push({
      name: Department[key as keyof typeof Department],
      code: key,
    });
  }
  return list;
};

export const employees: Employee[] = [
  {
    id: '1000',
    dept: 'BP',
    name: '王曉明',
    engName: 'Ming Wang',
    level: 'Level2',
  },
  {
    id: '1001',
    dept: 'BP',
    name: '林曉風',
    engName: 'Wind Lin',
    level: 'Level2',
  },
  {
    id: '1002',
    dept: 'BP',
    name: '游筱蕙',
    engName: 'Paggy Yu',
    level: 'Level2',
  },
  {
    id: '1003',
    dept: 'BP',
    name: '陳小安',
    engName: 'An Chen',
    level: 'Level3',
  },
  {
    id: '1004',
    dept: 'PM',
    name: '陳貓貓',
    engName: 'Bluecat Chen',
    level: 'Level2',
  },
  {
    id: '1003',
    dept: 'PM',
    name: '王強',
    engName: 'John Wang',
    level: 'Level1',
  },
  {
    id: '1006',
    dept: 'PM',
    name: '吳曉華',
    engName: 'Hua Wu',
    level: 'Level3',
  },
  {
    id: '1002',
    dept: 'DIT',
    name: '趙偉恩',
    engName: 'Wayne Chao',
    level: 'Level3',
  },
  {
    id: '1008',
    dept: 'DIT',
    name: '林小森',
    engName: 'Jason Lin',
    level: 'Level4',
  },
  {
    id: '1009',
    dept: 'DIT',
    name: '鄭米米',
    engName: 'Mimi Cheng',
    level: 'Level3',
  },
  {
    id: '1010',
    dept: 'DIT',
    name: '羅國佑',
    engName: 'Yoyo Luo',
    level: 'Level3',
  },
  {
    id: '1011',
    dept: 'ISO',
    name: '陳小小',
    engName: 'Small Chen',
    level: 'Level1',
  },
  {
    id: '1012',
    dept: 'ISO',
    name: '黃曉蘋',
    engName: 'Apple Huang',
    level: 'Level2',
  },
  {
    id: '1013',
    dept: 'IED',
    name: '張奈那',
    engName: 'Nana Chang',
    level: 'Level3',
  },
  {
    id: '1014',
    dept: 'IED',
    name: '林微微',
    engName: 'Wei Lin',
    level: 'Level2',
  },
  {
    id: '1013',
    dept: 'CCC',
    name: '林小陳',
    engName: 'Chen Lin',
    level: 'Level3',
  },
  {
    id: '1016',
    dept: 'CCC',
    name: '吳拉拉',
    engName: 'Lala Wu',
    level: 'Level2',
  },
  {
    id: '1012',
    dept: 'CCC',
    name: '羅曉光',
    engName: 'Op Luo',
    level: 'Level2',
  },
  {
    id: '1018',
    dept: 'CCC',
    name: '林以諾',
    engName: 'Yino Lin',
    level: 'Level2',
  },
  {
    id: '1019',
    dept: 'CCC',
    name: '林文安',
    engName: 'Ann Lin',
    level: 'Level2',
  },
  {
    id: '1020',
    dept: 'CCC',
    name: '陳曉雯',
    engName: 'Wen Chen',
    level: 'Level4',
  },
  {
    id: '1021',
    dept: 'PM',
    name: '小岩',
    engName: 'Rock S',
    level: 'Level3',
  },
  {
    id: '1022',
    dept: 'PM',
    name: '林春春',
    engName: 'Spring Lin',
    level: 'Level2',
  },
  {
    id: '1023',
    dept: 'PM',
    name: '張曉明',
    engName: 'Ming Chang',
    level: 'Level2',
  },
  {
    id: '1024',
    dept: 'PM',
    name: '林樂',
    engName: 'Happy Lin',
    level: 'Level5',
  },
  {
    id: '1023',
    dept: 'BP',
    name: '陳迪',
    engName: 'Di Chen',
    level: 'Level3',
  },
  {
    id: '1026',
    dept: 'BP',
    name: '吳安雅',
    engName: 'Yaya Wu',
    level: 'Level2',
  },
  {
    id: '1022',
    dept: 'BP',
    name: '艾莉絲',
    engName: 'Alice I',
    level: 'Level2',
  },
  {
    id: '1028',
    dept: 'BP',
    name: '馬尤佳',
    engName: 'Yoga Ma',
    level: 'Level4',
  },
  {
    id: '1029',
    dept: 'BP',
    name: '林品品',
    engName: 'Pinpin Lin',
    level: 'Level2',
  },
];
