import { Dispatch, ReactNode, SetStateAction } from "react";

type TLoanProviderProps = {
  children: ReactNode;
};

type TAccount = {
  id: number;
  bank_label: string;
  account_type_label: string;
  account_number: string;
};

type TCard = {
  id: number;
  card_number: string;
  expiration_date: string;
  cvv: string;
  front_image: string;
  back_image: string;
  selfie_image: string;
};

type TCardCreate = {
  card_number: string;
  expiration_date: string;
  cvv: string;
  front_image: File;
  back_image: File;
  selfie_image: File;
};

type TClient = {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: TAccount;
  cards: TCard[];
};

type TInstallment = {
  id: number;
  installment_number: number;
  installment_interest: number;
  comission: number;
  installment_value: number;
  full_value: number;
};

type TRateTable = {
  id: number;
  name: string;
  installments: TInstallment[];
};

type TSolicitation = {
  id: number;
  installment_interest: number;
  installment_interest_value: number;
  comission: number;
  comission_value: number;
  installment_value: number;
  card_number: string;
  desired_value: number;
  total_loan: number;
  contract_type: string;
  client: TClient;
  installment: TInstallment;
  rate_table: TRateTable;
};

type TSolicitationWithoutId = Omit<TSolicitation, "id">;

type TSolicitationCreateUpdate = Partial<TSolicitationWithoutId>;

type TLoanContext = {
  desiredValue: number;
  tables: TRateTable[];
  client: TClient | null;
  valueInput: string | null;
  setValueInput: Dispatch<SetStateAction<string | null>>;
  clientSolicitation: TSolicitation | null;
  createOrUpdateSolicitation: (
    data: TSolicitationCreateUpdate
  ) => Promise<void>;
  getAllTables: (value: number) => Promise<void>;
  getClient: (cpf: string) => Promise<void>;
  updateSolicitation: (
    data?: TSolicitationCreateUpdate,
    query?: string
  ) => Promise<void>;
  getSolicitation: () => Promise<void>;
  setInstallment: Dispatch<SetStateAction<TInstallment | null>>;
  installment: TInstallment | null;
  table: TRateTable | null;
  setTable: Dispatch<SetStateAction<TRateTable | null>>;
  createCard: (data: TCardCreate, cpf: string) => Promise<void>;
  card: TCard | null;
  retrieveTable: (id: number, value: number) => Promise<void>;
  loading: boolean;
  errorResponse: boolean;
};

export type {
  TLoanProviderProps,
  TSolicitationCreateUpdate,
  TRateTable,
  TClient,
  TSolicitation,
  TLoanContext,
  TInstallment,
  TCard,
  TCardCreate,
};
