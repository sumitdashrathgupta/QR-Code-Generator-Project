import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <nav class="navbar">
                    <span class="hamburger-btn material-symbols-rounded">menu</span>
                    <a href="/" class="logo">
                        <img src="../image/logo/logo.png" alt="" />
                    </a>
                    <ul class="links">
                        <span class="close-btn material-symbols-rounded">close</span>
                        <li><a href="/">Home</a></li>
                        <li><a href="/teams">Teams</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    {  isLoggedIn ? (<a href="/logout"> <button class="login-btn">
                        Logout
                    </button></a>
                    ) : (<>
                        <a href="/login"> <button class="login-btn">
                            Login
                        </button></a>
                    </>)}

                </nav>
            </header>
        </>
    )
} 