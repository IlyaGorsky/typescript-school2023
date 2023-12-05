const formatPrice = (price: number | string) => {
  if (typeof price === "string") {
    return parseInt(price, 10).toFixed(2);
  }
  return price.toFixed(2);
};

const isValidDate = (value: unknown): value is Date => {
  return value instanceof Date;
};

interface PrintUser {
  name?: string;
  age?: number;
}

const printDate = (date: Date) => {
  if (isValidDate(date)) {
    console.log(date.getDate());
  }
  throw new Error("Invalid date");
};

const isUser = (x: unknown): x is PrintUser => {
  if (typeof x === "object" && x != null && "name" in x && "age" in x) {
    return true;
  }
  return false;
};

const printUser = (user: PrintUser) => {
  if (isUser(user)) {
    console.log(user.name, user.age);
  }
  console.log("unknown");
};

// printDate(new Date());
