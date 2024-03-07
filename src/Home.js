import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <section class="links-container">
            <Link href="Login">Link</Link>
            <br />
            <br />
            <Link href="register">Register</Link>
        </section>
    );
};