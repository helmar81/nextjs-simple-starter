import Link from "next/link"
import { useRouter } from "next/router"
const Header = () => {
  const router = useRouter()
  return (
    <header>
      <div className="p-8 content-center">
       <Link href="/about">Dashboard</Link>
       </div>
    </header>
  )
}
export default Header