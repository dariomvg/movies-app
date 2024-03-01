import Image from "next/image";
import img404 from "../assets/img-404.svg";
import Link from "next/link";
import "./notFound.css"; 

const notFound = () => {
  return (
    <div className="section-404">
        <Image src={img404} width={500} height={400} alt="404 not found" className="img-404" />
        <h2 className="title-404">Page not found</h2>
        <Link href="/" className="link-404">Return Home</Link>
    </div>
  )
}

export default notFound