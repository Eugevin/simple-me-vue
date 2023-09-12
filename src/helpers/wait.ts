async function wait(delay: number): Promise<void> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

export default wait;