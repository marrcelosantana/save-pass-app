import { createContext, ReactNode, useState } from "react";

import { ServiceDTO } from "@models/ServiceDTO";

import {
  storageServicesCreate,
  storageServicesGetAll,
  storageServicesRemove,
} from "@storage/storageService";

export type ServiceContextProps = {
  services: ServiceDTO[];
  loadServices: (userId: string) => Promise<void>;
  registerService: (service: ServiceDTO, userId: string) => Promise<void>;
  removeService: (serviceId: string, userId: string) => Promise<void>;
};

type ServiceContextProviderProps = {
  children: ReactNode;
};

export const ServiceContext = createContext<ServiceContextProps>(
  {} as ServiceContextProps
);

export function ServiceContextProvider({
  children,
}: ServiceContextProviderProps) {
  const [services, setServices] = useState<ServiceDTO[]>([]);

  async function loadServices(userId: string) {
    try {
      const data = await storageServicesGetAll(userId);
      setServices(data);
    } catch (error) {
      throw error;
    }
  }

  async function registerService(service: ServiceDTO, userId: string) {
    try {
      await storageServicesCreate(service, userId);
      await loadServices(userId);
    } catch (error) {
      throw error;
    }
  }

  async function removeService(serviceId: string, userId: string) {
    try {
      await storageServicesRemove(serviceId, userId);
      loadServices(userId);
    } catch (error) {
      throw error;
    }
  }

  async function remove() {}

  return (
    <ServiceContext.Provider
      value={{ services, registerService, loadServices, removeService }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
