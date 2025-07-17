const cache: Record<string, any> = {};

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback();
  return cache[key] as T;
};
// 모듈로 인식되도록 빈 export 추가
export {};
