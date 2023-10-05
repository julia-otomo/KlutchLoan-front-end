import { createContext, useState } from "react";
import {
  TClient,
  TLoanContext,
  TLoanProviderProps,
  TRateTable,
  TSolicitation,
  TSolicitationCreateUpdate,
} from "./@types";
import api from "@/services/api";

const LoanContext = createContext({} as TLoanContext);

const LoanProvider = ({ children }: TLoanProviderProps) => {
  const [desiredValue, setDesiredValue] = useState(0);
  const [tables, setTables] = useState<TRateTable[]>([]);
  const [client, setClient] = useState<TClient | null>(null);
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [clientSolicitation, setClientSolicitation] =
    useState<TSolicitation | null>(null);

  const createOrUpdateSolicitation = async (
    data: TSolicitationCreateUpdate
  ) => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const solicitation = await api.patch<TSolicitation>(
          `api/solicitations/${solicitationId}/`,
          data
        );

        localStorage.setItem(
          "SolicitationTable:id",
          String(solicitation.data.id)
        );

        setDesiredValue(solicitation.data.desired_value);
        setClientSolicitation(solicitation.data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const solicitation = await api.post<TSolicitation>(
        "api/solicitations/",
        data
      );

      localStorage.setItem(
        "SolicitationTable:id",
        String(solicitation.data.id)
      );

      setDesiredValue(solicitation.data.desired_value);
      setClientSolicitation(solicitation.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSolicitation = async (data: TSolicitationCreateUpdate) => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const solicitation = await api.patch<TSolicitation>(
          `api/solicitations/${solicitationId}/`,
          data
        );

        localStorage.setItem(
          "SolicitationTable:id",
          String(solicitation.data.id)
        );

        setClientSolicitation(solicitation.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getAllTables = async (value: number) => {
    try {
      const allTables = await api.get<TRateTable[]>(
        `api/rateTable/?value=${value}`
      );

      setTables(allTables.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClient = async (cpf: string) => {
    try {
      const foundClient = await api.get<TClient>(`api/clients/${cpf}/`);

      setClient(foundClient.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSolicitation = async () => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const getSolicitation = await api.get(
          `api/solicitation/${solicitationId}/`
        );

        setClientSolicitation(getSolicitation.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <LoanContext.Provider
      value={{
        desiredValue,
        tables,
        client,
        valueInput,
        setValueInput,
        createOrUpdateSolicitation,
        getAllTables,
        getClient,
        clientSolicitation,
        updateSolicitation,
        getSolicitation,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export { LoanContext, LoanProvider };
