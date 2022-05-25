const cn = (...args: unknown[]): string => args.filter(Boolean).join(' ');

export {cn};
