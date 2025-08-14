import { CreateUserDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userDto: CreateUserDto): Promise<import("../user/user.entity").User>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    login2(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    testGuard(): string;
    login3(req: Request): Express.User | undefined;
    testGuardWithSession(req: Request): Express.User | undefined;
}
