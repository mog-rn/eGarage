import Link from "next/link"
import { trpc } from "../../utils/trpc"

function GarageListingPage() {
    const {data, isLoading} = trpc.useQuery(["garages.garages"])
    return (
        <>
            <h1>All Garages</h1>
            {data?.map((garage) => {
                return (
                    <div key={garage.id}>
                        <h2>{garage.title}</h2>
                        <p>{garage.body}</p>
                        <Link href={`/garages/${garage.id}`}>View Garage Details</Link>
                    </div>
                )
            })}
        </>

    )

}

export default GarageListingPage