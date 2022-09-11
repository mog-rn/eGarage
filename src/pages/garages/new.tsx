import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateGarageInput } from "../../schema/garage.schema";
import { trpc } from "../../utils/trpc";

function createGaragePage() {
  const { handleSubmit, register } = useForm<CreateGarageInput>();
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["garages.create-garage"], {
    onSuccess: ({ id }) => {
        router.push(`/garages/${id}`)
      },
  });
                                
  function onSubmit(values: CreateGarageInput) {
    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}                                    
        <h1>Create Garage</h1>
        <input type="text" placeholder="Garage Name" {...register('title')} />
        <textarea placeholder="Your garage details" {...register('body')} />
        <button type="submit">Create a garage</button>
    </form>
  )
}

export default createGaragePage;
