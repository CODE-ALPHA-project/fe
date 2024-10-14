import { experts } from "../mock/expert";

export const getRandomExperts = (count: number) => {
  const shuffled = [...experts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
