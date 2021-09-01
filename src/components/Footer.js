import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer bg-gray-100">
            <ul>
                <li id="footeritem-1"><a href="https://www.facebook.com/profile.php?id=100028892232243"><i class="fab fa-facebook fa-2x"></i></a></li>
                <li id="footeritem-2"><a href="https://www.instagram.com/namangarg0802/"><i class="fab fa-instagram fa-2x"></i></a></li>
                <li id="footeritem-3"><a href="https://www.linkedin.com/in/naman-garg-a01b34200/"><i class="fab fa-linkedin fa-2x"></i></a></li>
                <li id="footeritem-4"><a href="https://github.com/namangarg802"><i class="fab fa-github fa-2x"></i></a></li>
                <li id="footeritem-5"><a href="https://namangarg802@gmail.com"><i class="fas fa-envelope fa-2x"></i></a></li>
            </ul>
            <p>© 2021Copyright Naman Garg</p>
       
        </div>
    )
}

export default Footer
