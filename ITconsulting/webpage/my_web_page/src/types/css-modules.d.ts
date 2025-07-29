// CSS Modules 파일 임포트에 대한 타입 정의입니다.
// 이 파일이 없으면 '.module.css' 파일을 임포트할 때 TypeScript 오류가 발생합니다.
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
