/* eslint-disable react-hooks/rules-of-hooks */
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";
import { TRegisterCard, registerCardSchema } from "./validator";
import Input from "./Input";
import InputFile from "./InputFile";
import { useContext, useState } from "react";
import { LoanContext } from "@/providers/LoanContext";
import { TCardCreate } from "@/providers/LoanContext/@types";

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

  const fileValidation =
    ((frontImage?.size as number) &&
      (backImage?.size as number) &&
      (selfieImage?.size as number)) <
    1024 * 1024 * 2;

  const { createCard, updateSolicitation, clientSolicitation } =
    useContext(LoanContext);

  const onSubmitForm = (data: TRegisterCard) => {
    if (fileValidation) {
      const newFormData = new FormData() as FormData & TCardCreate;
      newFormData.append("card_number", data.card_number);
      newFormData.append("expiration_date", data.expiration_date);
      newFormData.append("cvv", data.cvv);
      newFormData.append("front_image", frontImage as File);
      newFormData.append("back_image", backImage as File);
      newFormData.append("selfie_image", selfieImage as File);

      createCard(newFormData, clientSolicitation!.client.cpf);

      updateSolicitation({ card_number: data.card_number });
    }
  };

  const fileError = () => {
    return !fileValidation && frontImage && backImage && selfieImage
      ? ({
          message: "São aceitos somente anexos de 2 MB um inferiores.",
        } as FieldError)
      : undefined;
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col w-[472px] items-center gap-4">
            <h2 className="text-xl text-brand-1">Insira os dados do Cartão</h2>
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

          <div className="flex flex-col w-[472px] items-center gap-4">
            <h2 className="text-xl text-brand-1">
              Faça o upload dos anexos do cartão
            </h2>

            <InputFile
              id="front_image"
              label="Cartão de Crédito (Frente)"
              required
              accept=".jpg,.jpeg,.png,.gif"
              onChange={(event) =>
                setFrontImage(event.target.files ? event.target.files[0] : null)
              }
              errors={fileError()}
            />
            <InputFile
              id="back_image"
              label="Cartão de Crédito (Verso)"
              required
              accept=".jpg,.jpeg,.png,.gif"
              onChange={(event) =>
                setBackImage(event.target.files ? event.target.files[0] : null)
              }
              errors={fileError()}
            />
            <InputFile
              id="selfie_image"
              label="Selfie com cartão de crédito"
              required
              accept=".jpg,.jpeg,.png,.gif"
              onChange={(event) =>
                setSelfieImage(
                  event.target.files ? event.target.files[0] : null
                )
              }
              errors={fileError()}
            />
            <p className="text-brand-1">
              Atenção: As fotos devem estar legíveis, com todas as informações
              visíveis do cartão
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 w-[391px] h-[98px] bg-brand-1 text-3xl text-grey-1 font-bold py-8 rounded-md hover:bg-brand-3 text-center self-center"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default CardForm;
