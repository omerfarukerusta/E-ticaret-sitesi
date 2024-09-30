import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link className="navbar__link relative" href="#">
                        ANA SAYFA
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        TELEFON
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        BİLGİSAYAR
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        TELEVİZYON
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        BEYAZ EŞYA
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        İNDİRİMDEKİLER
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
