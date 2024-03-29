import { ConfigInput } from '../types/config.type';
import { ScriptConfigDto } from '../types/script.type';
import { apiClient } from './apiFactory';

export const postCofing = async (data: ConfigInput) =>
  await apiClient.post<ConfigInput, ScriptConfigDto>(`/configs/`, data);

export const deleteConfig = async (id: number) =>
  await apiClient.delete(`/configs/${id}`);
