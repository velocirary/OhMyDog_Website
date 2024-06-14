import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getUserInfos } from '@/api/get-user-infos'
import { patchUser, patchUserBody } from '@/api/patch-user'
import { ErrorMessage } from '@/components/form-error-message'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/auth-context'

import {
  userInfosFormSchema,
  userInfosSchema,
} from './schemas/user-infos-schema'

interface UserEditInfosDialogProps {
  closeDialog: () => void
}

export function UserEditInfosDialog({ closeDialog }: UserEditInfosDialogProps) {
  const { user } = useAuth()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const {
    data: userInfos,
    isFetching: isUserInfosFetching,
    refetch: refetchUserInfos,
  } = useQuery({
    queryFn: () => getUserInfos({ userID: user?.idUser }),
    queryKey: ['get-user-infos'],
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<userInfosFormSchema>({
    resolver: zodResolver(userInfosSchema),
  })

  const [imagePreview, setImagePreview] = useState<string | undefined>(
    userInfos?.photoURL,
  )

  const { mutateAsync: patchUserFn, isPending } = useMutation({
    mutationFn: patchUser,
  })

  useEffect(() => {
    if (userInfos) {
      setImagePreview(userInfos?.photoURL)
    }
  }, [userInfos])

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result?.toString())
        setValue('photoURL', reader.result?.toString() || '')
      }
      reader.readAsDataURL(file)
    }
  }

  function handleRemoveImage() {
    setImagePreview(undefined)
    setValue('photoURL', '')
  }

  async function onFormSubmit(data: patchUserBody) {
    try {
      // Update user ID
      data.userID = user?.idUser
      await patchUserFn(data)

      // Close and reset Dialog
      closeDialog()
      reset()

      // Refetch infos for more recently
      await refetchUserInfos()
      toast.success('Informações atualizada com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao atualizar as informações')
    }
  }

  return (
    <DialogContent className="h-[80vh] overflow-hidden">
      <DialogHeader className="pt-8">
        <DialogTitle className="font-rubik text-xl">Editar perfil</DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Atualize suas informações para mantê-las sempre atualizadas. Suas
          mudanças serão refletidas para todos os usuários, portanto, não se
          esqueça de salvar.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      <form className="overflow-y-auto" onSubmit={handleSubmit(onFormSubmit)}>
        <section className="my-8">
          <span className="mb-6 block font-rubik font-semibold">
            Dados da conta
          </span>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-medium">Foto de perfil</span>
              <span className="font-karla text-sm text-zinc-400">
                Recomendado uma foto de 300x300 pixels
              </span>

              <div className="space-x-2">
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-zinc-600 hover:bg-zinc-700"
                >
                  Alterar
                </Button>

                <Input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="sr-only"
                  onChange={handleImageChange}
                />

                <Input
                  type="text"
                  id="photoURL"
                  className="sr-only"
                  defaultValue={userInfos?.photoURL}
                  {...register('photoURL')}
                />

                <Button
                  type="button"
                  onClick={handleRemoveImage}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Remover foto
                </Button>
              </div>
            </div>

            <div>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview da foto de perfil do usuário"
                  className="h-20 w-20 rounded-full object-cover object-center"
                />
              ) : (
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl font-medium">
                    {userInfos?.nameInitials}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>

          <article className="mx-1 mt-8 space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              type="email"
              id="email"
              {...register('email')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.email}
            />
            <ErrorMessage error={errors.email} placeholder="" />
          </article>
        </section>

        <Separator />

        <section className="space-y-4">
          <span className="mb-4 mt-8 block font-rubik font-semibold">
            Dados pessoais
          </span>

          <article className="mx-1 space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              type="text"
              id="name"
              {...register('name')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.name}
            />
            <ErrorMessage error={errors.name} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              type="text"
              id="cpf"
              {...register('cpf')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.cpf}
            />
            <ErrorMessage error={errors.cpf} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              type="text"
              id="phone"
              {...register('phone')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.phone}
            />
            <ErrorMessage error={errors.name} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="dateOfBirth">Data de nascimento</Label>
            <Input
              type="text"
              id="dateOfBirth"
              {...register('dateOfBirth')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.dateOfBirth}
            />
            <ErrorMessage error={errors.dateOfBirth} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressStreet">Endereço</Label>
            <Input
              type="text"
              id="addressStreet"
              {...register('addressStreet')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressStreet}
            />
            <ErrorMessage error={errors.addressStreet} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressCity">Cidade</Label>
            <Input
              type="text"
              id="addressCity"
              {...register('addressCity')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressCity}
            />
            <ErrorMessage error={errors.addressCity} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressState">Estado</Label>
            <Input
              type="text"
              id="addressState"
              {...register('addressState')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressState}
            />
            <ErrorMessage error={errors.addressState} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressDistrict">Bairro</Label>
            <Input
              type="text"
              id="addressDistrict"
              {...register('addressDistrict')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressDistrict}
            />
            <ErrorMessage error={errors.addressDistrict} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressNumber">Numero</Label>
            <Input
              type="text"
              id="addressNumber"
              {...register('addressNumber')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressNumber}
            />
            <ErrorMessage error={errors.addressNumber} placeholder="" />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressCep">CEP</Label>
            <Input
              type="text"
              id="addressCep"
              {...register('addressCep')}
              disabled={isSubmitting || isUserInfosFetching || isPending}
              defaultValue={userInfos?.addressCep}
            />
            <ErrorMessage error={errors.addressCep} placeholder="" />
          </article>
        </section>

        <DialogFooter className="pt-8">
          <Button className="ml-auto bg-green-500 text-zinc-800 hover:bg-green-600">
            Salvar alterações
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
