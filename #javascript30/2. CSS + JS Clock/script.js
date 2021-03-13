const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getDate() {
  const now = new Date();
  const hours = now.getHours();

  const dimensions = [
    {
      name: "hour",
      asSec: 3600,
      maxCount: 12,
      value: hours > 12 ? hours - 12 : hours, // 12 hours clock; for example can not be exist 17 o'clock
      element: secondHand,
    },
    {
      name: "min",
      asSec: 60,
      maxCount: 60,
      value: now.getMinutes(),
      element: minHand,
    },
    {
      name: "second",
      asSec: 1,
      maxCount: 60,
      value: now.getSeconds(),
      element: hourHand,
    },
  ];

  const totalSeconds = dimensions.reduce((prev, cur) => {
    return prev + cur.value * cur.asSec;
  }, 0);

  dimensions.forEach((dim) => {
    const degree = 90 + ((360 / dim.maxCount) * totalSeconds) / dim.asSec;
    dim.element.style.transform = `rotate(${degree}deg)`;
  });
}

getDate();
setInterval(getDate, 1000);
