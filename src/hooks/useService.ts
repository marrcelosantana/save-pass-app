import { useContext } from "react";
import { ServiceContext } from "@contexts/ServicesContext";

export function useService() {
  const context = useContext(ServiceContext);
  return context;
}
