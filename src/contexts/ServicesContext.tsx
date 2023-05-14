import { createContext, ReactNode, useState } from "react";

import { ServiceDTO } from "@models/ServiceDTO";
import { useAuth } from "@hooks/useAuth";

import {
  storageServicesCreate,
  storageServicesGetAll,
  storageServicesRemove,
} from "@storage/storageService";

export type ServiceContextProps = {
  services: ServiceDTO[];
  setServices: (services: ServiceDTO[]) => void;
  loadServices: () => Promise<void>;
  registerService: (service: ServiceDTO) => Promise<void>;
  removeService: (serviceId: string) => Promise<void>;
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
  const { user } = useAuth();
  const [services, setServices] = useState<ServiceDTO[]>([]);

  async function loadServices() {
    try {
      const data = await storageServicesGetAll(user.id);
      setServices(data);
    } catch (error) {
      throw error;
    }
  }

  async function registerService(service: ServiceDTO) {
    try {
      await storageServicesCreate(service, user.id);
      await loadServices();
    } catch (error) {
      throw error;
    }
  }

  async function removeService(serviceId: string) {
    try {
      await storageServicesRemove(serviceId, user.id);
      loadServices();
    } catch (error) {
      throw error;
    }
  }

  return (
    <ServiceContext.Provider
      value={{
        services,
        setServices,
        registerService,
        loadServices,
        removeService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
