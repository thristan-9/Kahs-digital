import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import style from "../../styles/Contact.module.css";
import InputText from "../InputText";
import Button from "../Button";

export default function Contact() {

    const formRef = useRef();
    const formMessageRef = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a0jh5yq', 'template_1wkl2lw', formRef.current, 'aE5PLTzY26wcep2fL')
            .then((result) => {
                formMessageRef.current.textContent = "Messagem enviada com sucesso! ✅";

                setTimeout(() => {
                    formMessageRef.current.textContent = "";
                }, 4000);

                formRef.current.reset();

            }, (error) => {
                formMessageRef.current.textContent = "Erro ao enviar a menssagem (service error) ❌";
            });
    }

    return (
        <section id="contact" className={style.contact}>
            <div className={`${style.contact__container} container grid`}>

                <h1 className="title">Contato</h1>

                <div className={`${style.contact__data} grid`}>
                
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className={`${style.form__wrapper} grid`}>
                            <div className={`${style.inputs__wrapper} grid`}>
                                <InputText required id="user_name" name="user_name" label="Nome" />
                                <InputText required id="user_email" name="user_email" label="E-mail" />
                            </div>

                            <div>
                                <InputText required id="user_message" name="user_message" label="Menssagem" />
                                <p ref={formMessageRef} className={style.contact__message}></p>
                            </div>


                            <Button type="submit" label="Enviar" />
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}
