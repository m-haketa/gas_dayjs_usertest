// eslint-disable-next-line @typescript-eslint/no-unused-vars
function main() {
  const d1 = dayjs.dayjs();
  Logger.log(d1.format('YYYY-MM-DD'));
  // 現在時刻

  const d2 = dayjs.dayjs(new Date(2020, 0, 1));
  Logger.log(d2.format('YYYY-MM-DD'));
  // 2020-01-01

  const d3 = dayjs.dayjs(new Date(2020, 0, 1));
  Logger.log(d3.format('YYYY-MM-DD'));
  // 2020-01-01

  const d4 = dayjs.dayjs(new Date(2020, 0, 1));

  Logger.log(d4.year()); //2020.0
  Logger.log(d4.month()); //  0.0（月は0～11で表される）
  Logger.log(d4.date()); //   1.0

  const d5 = dayjs.dayjs(new Date(2020, 0, 1));
  const d6 = d5.year(2021).month(2).date(4);

  Logger.log(d5.format('YYYY-MM-DD'));
  //2021-01-01

  Logger.log(d6.format('YYYY-MM-DD'));
  //2021-03-04

  const d7 = dayjs.dayjs(new Date(2020, 0, 31));
  const d8 = d7.add(2, 'year').add(2, 'month').subtract(4, 'day');

  Logger.log(d7.format('YYYY-MM-DD'));
  // 2020-01-31

  Logger.log(d8.format('YYYY-MM-DD'));
  // 2022-03-28

  const d9 = dayjs.dayjs(new Date(2020, 0, 1));
  const date9 = d9.toDate();
  Logger.log(date9);
  //Wed Jan 01 00:00:00 GMT+09:00 2020

  const d10 = dayjs.dayjs(new Date(2020, 0, 1));
  Logger.log(d10.locale('ja').format('YYYY-MM-DD dddd'));
  //2020-01-01 水曜日

  const d11 = dayjs.dayjs(new Date(2020, 0, 1));
  Logger.log(d11.format('YYYY-MM-DD dddd'));
  //2020-01-01 Wednesday

  dayjs.dayjs.locale('ja');
  const d12 = dayjs.dayjs(new Date(2020, 0, 1));
  Logger.log(d12.format('YYYY-MM-DD dddd'));
  //2020-01-01 水曜日
}
