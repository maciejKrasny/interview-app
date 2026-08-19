import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) { }

    canActivate(context: ExecutionContext): boolean {
        const gqlContext = GqlExecutionContext.create(context);
        const req = gqlContext.getContext().req as Request;

        const header = req?.headers?.authorization;
        if (!header || !header.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing password');
        }

        const password = header.slice('Bearer '.length);
        const expectedPassword = this.configService.get<string>('AUTH_PASSWORD');

        if (password !== expectedPassword) {
            throw new UnauthorizedException('Invalid password');
        }

        return true;
    }
}
