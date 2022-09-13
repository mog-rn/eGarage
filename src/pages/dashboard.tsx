import Sidebar from "../components/reusables/Sidebar";
import {useUserContext} from "../context/user.context";

function Dashboard() {
    const user = useUserContext();

    if (!user) {
        return <>You must be logged in to view your profile</>
    }
    return (
        <div className="h-screen bg-[#F6FBF2] p-5">
            <Sidebar />
        </div>
    )
}

export default Dashboard