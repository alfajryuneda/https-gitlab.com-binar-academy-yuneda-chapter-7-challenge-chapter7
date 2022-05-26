export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const filteringCar = (data) => {
  data.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return {
      ...car,
      availableAt,
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
