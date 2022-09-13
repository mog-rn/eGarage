import { useUserContext } from "../../context/user.context"

function GarageOwner() {
  const user = useUserContext()

  if(!user) {
    return <>You must be logged in to view the dashboard</>
  }
  return <>Garage Owner dashboard</>
}

export default GarageOwner