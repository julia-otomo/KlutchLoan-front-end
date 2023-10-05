import { createContext, useEffect, useState } from "react";
import {
  TClient,
  TInstallment,
  TLoanContext,
  TLoanProviderProps,
  TRateTable,
  TSolicitation,
  TSolicitationCreateUpdate,
} from "./@types";
import api from "@/services/api";
import { toast } from "react-toastify";

const LoanContext = createContext({} as TLoanContext);

const LoanProvider = ({ children }: TLoanProviderProps) => {
  const [desiredValue, setDesiredValue] = useState(0);
  const [tables, setTables] = useState<TRateTable[]>([]);
  const [client, setClient] = useState<TClient | null>(null);
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [clientSolicitation, setClientSolicitation] =
    useState<TSolicitation | null>(null);
  const [installment, setInstallment] = useState<TInstallment | null>(null);
  const [table, setTable] = useState<TRateTable | null>(null);

  const createOrUpdateSolicitation = async (
    data: TSolicitationCreateUpdate
  ) => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const solicitation = await api.patch<TSolicitation>(
          `api/solicitation/${solicitationId}/`,
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
        toast.error(
          "O valor desejado deve estar entre o intervalo de 300 à 10.000"
        );
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
      toast.error(
        "O valor desejado deve estar entre o intervalo de 300 à 10.000"
      );
    }
  };

  const updateSolicitation = async (data: TSolicitationCreateUpdate) => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const solicitation = await api.patch<TSolicitation>(
          `api/solicitation/${solicitationId}/`,
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

  useEffect(() => {
    const getSolicitationEffect = async () => {
      const solicitationId =
        Number(localStorage.getItem("SolicitationTable:id")) || null;

      if (solicitationId) {
        await getSolicitation();
      }
    };

    getSolicitationEffect();
  }, []);

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
        installment,
        setInstallment,
        table,
        setTable,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export { LoanContext, LoanProvider };
