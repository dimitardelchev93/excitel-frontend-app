export function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  wait: number,
): (...args: T) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function debounced(...args: T) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, wait);
  }

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

export function convertPascalCaseToUppercaseWords(str: string) {
  const spacedStr = str.replace(/([A-Z])/g, ' $1');

  const titleCasedStr = spacedStr
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());

  return titleCasedStr;
}

export function formatNumberToString(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
