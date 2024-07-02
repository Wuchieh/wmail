function parseDate(date: Date, format: string): string {
  const pad = (n: number): string => n < 10 ? `0${n}` : `${n}`;

  const replacements: { [key: string]: string } = {
    'YYYY': date.getFullYear().toString(),
    'MM': pad(date.getMonth() + 1),
    'DD': pad(date.getDate()),
    'hh': pad(date.getHours()),
    'mm': pad(date.getMinutes()),
    'ss': pad(date.getSeconds()),
  };

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, match => replacements[match]);
}

export {parseDate}
