import {
  CreateUserDto,
  UserAuthType,
  UserDto,
  UserLogType,
} from '../types/user.type';
import { apiClient } from './apiFactory';

export const userAuthenticate = async (data: UserLogType) =>
  await apiClient.post<UserLogType, UserAuthType>('/auth/login', data);

export const userRegister = async (data: CreateUserDto) =>
  await apiClient.post<CreateUserDto, UserDto>('/auth/create', data);
