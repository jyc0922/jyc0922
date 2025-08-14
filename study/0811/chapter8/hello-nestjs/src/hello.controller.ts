import { Controller, Get } from "@nestjs/common";

@Controller()
export class HelloController {
  @Get()
  hello() {
    return "Hello, NestJS! 안녕하세요, 첫 NestJS 애플리케이션입니다.";
  }
}
