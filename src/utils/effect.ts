export function sleep(delay: number) {
  return new Promise<typeof delay>(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

export function sleepSync(delay: number) {
  const now = Date.now();
  while (Date.now() - now < delay);
}
