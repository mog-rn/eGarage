import Image from "next/image"
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
                        <Image src={garage.image} width={200} height={200} />
                        <h2>{garage.name}</h2>
                        <p>{garage.description}</p>
                        <Link href={`/garages/${garage.id}`}>View Garage Details</Link>
                    </div>
                )
            })}
        </>

    )

}

export default GarageListingPage