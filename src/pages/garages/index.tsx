import { trpc } from "../../utils/trpc"

function AllGarages() {
    const {data, isLoading} = trpc.useQuery(["garages.garages"])
    return (
        <>
            <h1>All Garages</h1>
            <p>{JSON.stringify(data)}</p>
        </>

    )

}

export default AllGarages