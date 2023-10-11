import { PackageDto } from '../types/package.type';
import { apiClient } from './apiFactory';

export const getPackages = async () =>
  await apiClient.get<PackageDto[]>('/packages');
