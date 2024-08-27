import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body()
    registerDto: {
      username: string;
      password: string;
      phoneNumber: string;
    },
  ) {
    return this.authService.register(
      registerDto.username,
      registerDto.password,
      registerDto.phoneNumber,
    );
  }

  @Post('login')
  async login(@Body() loginDto: { phoneNumber: string; password: string }) {
    const participant = await this.authService.validateParticipant(
      loginDto.phoneNumber,
      loginDto.password,
    );
    if (!participant) {
      return { error: 'Invalid credentials' };
    }
    return this.authService.login(participant);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
