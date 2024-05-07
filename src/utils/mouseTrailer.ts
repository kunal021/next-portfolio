const trailer: any = document.querySelector("#trailer");

const handleMouseMove = (e: any) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clienty - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}, ${y})`,
  };

  trailer.animate(keyframes, {
    transform: 800,
    fill: "forwards",
  });
};

export default handleMouseMove;
