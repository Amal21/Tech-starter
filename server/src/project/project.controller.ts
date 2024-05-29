import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { AuthGuard } from '../auth/auth.guard';
import { Project } from './project.interface';
import { Request } from 'express';
import { UserPayload } from '../auth/interfaces/user-payload.interface';

interface AuthenticatedRequest extends Request {
  user: { username: string };
}

@Controller('projects')
@UseGuards(AuthGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getProjects(@Req() request: AuthenticatedRequest): Promise<Project[]> {
    const username = request.user.username;
    console.log('Fetching projects for user:', username);
    return this.projectService.getProjects(username);
  }
}
