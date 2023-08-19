import Link from "next/link";

import Image from "next/image";
import logoImage from "@/public/doctrack.jpg"
 
const Logo = () => {
    return (
        <Link href={`/`}>
            <Image src={logoImage}
                alt="doctrack logo"
                width={70}
                height={70}
            />
        </Link>
    )
}


export default Logo;