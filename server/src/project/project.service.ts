import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axiosInstance from '../config/axios.config';
import { Project } from './project.interface';

@Injectable()
export class ProjectService {
  async getProjects(username: string): Promise<Project[]> {
    try {
      const response = await axiosInstance.get<Project[]>(
        `/users/${username}/projects`,
      );
      console.log('Projects fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
      throw new HttpException(
        'Error fetching projects',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
