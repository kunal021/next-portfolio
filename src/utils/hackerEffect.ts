const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval: any = null;

const hackerEffect = (e: any) => {
  let iterations = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter: string, index: number) => {
        if (index < iterations) {
          return e.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= e.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
};

export default hackerEffect;
