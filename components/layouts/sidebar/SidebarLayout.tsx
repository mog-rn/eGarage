import Link from "next/link"

export interface ISidebarLayout {

}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link href="/search">Search</Link>
            </li>
            <li>
                <Link href="/review">Reviews</Link>
            </li>
            <li>
                <Link href="/faq">FAQs</Link>
            </li>
            <li>
                <Link href="/account">Account</Link>
            </li>
        </ul>
    </div>
  )
}

export default SidebarLayout