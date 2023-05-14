import AsyncStorage from "@react-native-async-storage/async-storage";

import { SERVICE_STORAGE } from "./storageConfig";
import { ServiceDTO } from "@models/ServiceDTO";

export async function storageServicesGetAll(userId: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${SERVICE_STORAGE}_user:${userId}`
    );

    const services: ServiceDTO[] = storage ? JSON.parse(storage) : [];

    return services;
  } catch (error) {
    throw error;
  }
}

export async function storageServicesCreate(
  service: ServiceDTO,
  userId: string
) {
  try {
    const storage = await storageServicesGetAll(userId);

    const newStorage = JSON.stringify([service, ...storage]);

    await AsyncStorage.setItem(`${SERVICE_STORAGE}_user:${userId}`, newStorage);
  } catch (error) {
    throw error;
  }
}

export async function storageServicesRemove(serviceId: string, userId: string) {
  try {
    const storage = await storageServicesGetAll(userId);

    const filtered = storage.filter((item) => item.id !== serviceId);

    const services = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${SERVICE_STORAGE}_user:${userId}`, services);
  } catch (error) {
    throw error;
  }
}
