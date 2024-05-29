import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserPayload } from './interfaces/user-payload.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      console.log('No token found');
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const decoded = this.authService.verifyToken(token) as UserPayload;

    if (!decoded) {
      console.log('Token verification failed');
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    console.log('Decoded token:', decoded);
    request.user = { username: decoded.sub };
    return true;
  }
}
