import Link from "next/link";
import Button from "../button/Button";

const TopBar = () => {
    return (
        <div>
            <nav>
                <h1>Shahzaib</h1>
                <ul>
                    <li>
                        <Link href='/' passHref>
                            Introduction
                        </Link>
                    </li>
                    <li>
                        <Link href='/about' passHref>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href='/reviews' passHref>
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact' passHref>
                            Contact
                        </Link>
                    </li> 
                </ul>
                <Button title="Download CV" />
            </nav>
        </div>
    )
}

export default TopBar;
