export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const filteringCar = (cars, { date, time, passenger, driver }) => {
  return cars
    .filter(
      (car) =>
        // filter available and capacity
        car.available == true && car.capacity >= passenger
    )
    .filter((car) => {
      // filter availableAt
      let inputDateTime = Date.parse(date + "T" + time + "Z");
      let carDate = Date.parse(car.availableAt);
      if (carDate >= inputDateTime) {
        return car;
      }
    })
    .filter(
      (car) =>
        // filter driver
        car.driver == driver
    );
};

export function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const populateCars = (cars) => {
  return cars.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = randomDate(
      new Date(2022, 5, 25),
      new Date(2022, 6, 5)
    ).toISOString();

    return {
      ...car,
      availableAt,
      driver: ["withDriver", "noDriver"][
        Math.floor(Math.random() * ["withDriver", "noDriver"].length)
      ],
    };
  });
};

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
