import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET;

  constructor(private readonly jwtService: JwtService) {}

  verifyToken(token: string): any {
    try {
      return this.jwtService.verify(token, { secret: this.JWT_SECRET });
    } catch (e) {
      console.error('Token verification failed', e);
      return null;
    }
  }
}
