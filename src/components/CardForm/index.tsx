import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterCard, registerCardSchema } from "./validator";
import Input from "./Input";
import InputFile from "./InputFile";
import { useContext, useState } from "react";
import { LoanContext } from "@/providers/LoanContext";
import Link from "next/link";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterCard>({
    resolver: zodResolver(registerCardSchema),
  });

  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [selfieImage, setSelfieImage] = useState<File | null>(null);

  const { createCard, updateSolicitation } = useContext(LoanContext);

  const onSubmitForm = (data: TRegisterCard) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2>Insira os dados do Cartão</h2>
            <Input
              id="name"
              {...register("name")}
              errors={errors.name}
              placeholder="Nome no cartão"
            />
            <Input
              id="card_number"
              {...register("card_number")}
              errors={errors.card_number}
              placeholder="Número do cartão"
            />
            <Input
              id="expiration_date"
              {...register("expiration_date")}
              errors={errors.expiration_date}
              placeholder="Data de expiração (xx/xx)"
              maxLength={5}
            />
            <Input
              id="cvv"
              {...register("cvv")}
              errors={errors.cvv}
              placeholder="Código de segurança"
              maxLength={4}
            />
          </div>

          <div>
            <h2>Faça o upload dos anexos do cartão</h2>

            <InputFile
              id="front_image"
              label="Cartão de Crédito (Frente)"
              required
            />
            <InputFile
              id="back_image"
              label="Cartão de Crédito (Verso)"
              required
            />
            <InputFile
              id="selfie_image"
              label="Selfie com cartão de crédito"
              required
            />
            <p>
              Atenção: As fotos devem estar legíveis, com todas as informações
              visíveis do cartão
            </p>
          </div>
        </div>
        <button type="submit">Confirmar</button>
      </form>
      <Link href="/preSolicitation">Continuar</Link>
    </div>
  );
};

export default CardForm;
