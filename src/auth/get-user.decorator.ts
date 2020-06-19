import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Profile } from 'src/profiles/profile.entity';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): Profile => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});