import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateGarageInput } from "../../schema/garage.schema";
import { trpc } from "../../utils/trpc";

function createGaragePage() {
  const { handleSubmit, register } = useForm<CreateGarageInput>();
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["garages.create-garage"], {
    onSuccess: ({ id }) => {
      router.push(`/garages/${id}`);
    },
  });

  function onSubmit(values: CreateGarageInput) {
    mutate(values);
  }

  return (
    <div className="p-5 flex items-center justify-center h-screen">
    <form onSubmit={handleSubmit(onSubmit)} className="h-auto bg-gray-100 w-auto border border-2 shadow-md container">
      {error && error.message}
      <h1 className="flex items-center justify-center">Create Garage</h1>
      <div className="grid grid-cols-2 container p-10">
        <div className="flex flex-col w-48">
          <div>
            <label htmlFor="garage_name">Garage Name</label>
            <input
              type="text"
              placeholder="Garage Name"
              aria-label="Garage Name"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="services_offered">Services Offered</label>
            <input
              type="text"
              placeholder="Garage Services"
              {...register("services")}
            />
          </div>
          <div className="flex">
            <div>
              <label htmlFor="county">County Located</label>
              <input
                type="text"
                placeholder="Nairobi, Nakuru, e.t.c"
                {...register("city")}
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                placeholder="Kenya, Uganda"
                {...register("country")}
              />
            </div>
          </div>
          <div>
            <h1>Contact Details</h1>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                placeholder="25471234567890"
                {...register("phone")}
              />
            </div>
            <div>
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                placeholder="garage@info.co.ke"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                placeholder="garage.co.ke"
                {...register("website")}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <label htmlFor="description">Bio</label>
            <textarea
              placeholder="Please describe in details what your garage is able to offer"
              {...register("description")}
              rows={5}
              cols={30}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Photo of your Garage</label>
            <input type="text" {...register("image")} />
          </div>
          <div className="flex ">
            <div className="flex flex-col">
              <label htmlFor="time_open">Opening time</label>
              <input type="text" {...register("time_open")} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time_close">Closing time</label>
              <input type="text" {...register("time_close")} />
            </div>
          </div>
          <button type="submit">Create a garage</button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default createGaragePage;
