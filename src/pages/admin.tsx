import dynamic from "next/dynamic";

const ReactAdmin = dynamic(() => import('../components/Admin'), {
    ssr: false
})

const HomePage = () => <ReactAdmin />

export default HomePage