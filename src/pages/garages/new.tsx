import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateGarageInput } from "../../schema/garage.schema";
import { trpc } from "../../utils/trpc";
import { useUserContext } from "../../context/user.context";

function createGaragePage() {
  const { handleSubmit, register } = useForm<CreateGarageInput>();
  const router = useRouter();

  const user = useUserContext();

  const { mutate, error } = trpc.useMutation(["garages.create-garage"], {
    onSuccess: ({ id }) => {
      router.push(`/garages/${id}`);
    },
  });

  function onSubmit(values: CreateGarageInput) {
    mutate(values);
  }

  if (!user) {
    router.push("/owner/login");
  }

  return (
    <div className="p-5 flex items-center justify-center h-screen bg-[#F6FBF2]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-auto bg-white w-auto border-transparent border-2 shadow-lg container rounded-lg"
      >
        {error && error.message}
        <h1 className="flex items-center justify-center font-bold text-xl p-4">Create Garage</h1>
        <div className="grid grid-cols-2 gap-5 container p-10">
          <div className="flex flex-col w-48">
            <div>
              <label htmlFor="garage_name">Garage Name</label>
              <input
                type="text"
                placeholder="Garage Name"
                aria-label="Garage Name"
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="services_offered">Services Offered</label>
              <input
                type="text"
                placeholder="Garage Services"
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                {...register("services")}
              />
            </div>
            <div className="flex space-x-16">
              <div>
                <label htmlFor="county">County Located</label>
                <input
                  type="text"
                  placeholder="Nairobi, Nakuru, e.t.c"
                  className="border border-[#118024]/50 w-40 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                  {...register("city")}
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  placeholder="Kenya, Uganda"
                  className="border border-[#118024]/50 w-40 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                  {...register("country")}
                />
              </div>
            </div>
            <div>
              <h1 className="">Contact Details</h1>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  placeholder="25471234567890"
                  {...register("phone")}
                  className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email">Contact Email</label>
                <input
                  type="email"
                  placeholder="garage@info.co.ke"
                  className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  placeholder="garage.co.ke"
                  {...register("website")}
                  className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Please describe in details what your garage is able to offer"
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                {...register("description")}
                rows={5}
                cols={30}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image">Photo of your Garage</label>
              <input
                type="text"
                {...register("image")}
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
              />
            </div>
            <div className="flex ">
              <div className="flex flex-col">
                <label htmlFor="time_open">Opening time</label>
                <input
                  type="text"
                  {...register("time_open")}
                  className="border border-[#118024]/50 w-40 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="time_close">Closing time</label>
                <input
                  type="text"
                  {...register("time_close")}
                  className="border border-[#118024]/50 w-40 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
                />
              </div>
            </div>
            <button type="submit" className="bg-[#118024] p-5 mt-5 text-white">Create a garage</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default createGaragePage;
