/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import {
  TCard,
  TCardCreate,
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
import { useRouter } from "next/router";

const LoanContext = createContext({} as TLoanContext);

const LoanProvider = ({ children }: TLoanProviderProps) => {
  const router = useRouter();
  const [desiredValue, setDesiredValue] = useState(0);
  const [tables, setTables] = useState<TRateTable[]>([]);
  const [client, setClient] = useState<TClient | null>(null);
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [clientSolicitation, setClientSolicitation] =
    useState<TSolicitation | null>(null);
  const [installment, setInstallment] = useState<TInstallment | null>(null);
  const [table, setTable] = useState<TRateTable | null>(null);
  const [card, setCard] = useState<TCard | null>(null);

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
    } else {
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
    }
  };

  const updateSolicitation = async (
    data?: TSolicitationCreateUpdate,
    query?: string
  ) => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const solicitation = await api.patch<TSolicitation>(
          `api/solicitation/${solicitationId}/${query ? query : ""}`,
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
      toast.error("Cliente não encontrado !");
    }
  };

  const getSolicitation = async () => {
    const solicitationId =
      Number(localStorage.getItem("SolicitationTable:id")) || null;

    if (solicitationId) {
      try {
        const getSolicitation = await api.get<TSolicitation>(
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

  const createCard = async (data: TCardCreate, cpf: string) => {
    try {
      const creditCard = await api.post(`api/cards/client/${cpf}/`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      setCard(creditCard.data);

      router.push("/preSolicitation");
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveTable = async (id: number, value: number) => {
    try {
      const getTable = await api.get(`api/rateTable/${id}/?value=${value}`);

      setTable(getTable.data);
    } catch (error) {
      console.log(error);
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
        installment,
        setInstallment,
        table,
        setTable,
        card,
        createCard,
        retrieveTable,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export { LoanContext, LoanProvider };
