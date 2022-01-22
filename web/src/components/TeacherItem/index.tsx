import React from "react";
import './styles.css';

import zapIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/78181472?v=4" alt="Luiza Monção" />
                <div>
                    <strong>Luiza Monção</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                <br /><br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={zapIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;