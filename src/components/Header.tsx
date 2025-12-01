'use client'

import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href={'/'}>
                <p className="text-3xl">
                    Chihuahueños S.A. de C.V.
                </p>
            </Link>
        </div>
    );
}

export default Header;