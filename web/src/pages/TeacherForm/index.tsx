import React from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from 'react-router-dom'
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas.">
                <div className="header-content-form">
                    O primeiro passo é preencher esse formulário de inscrição.
                </div>
            </PageHeader>

            <main>
                <div className="data-container">
                    <div className="title-form">Seus dados</div>
                    <div className="questions-form">
                        <div className="input-block">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" id="name" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="pictureLink">Link da sua foto</label>
                            <span>(comece com //http)</span>
                            <input type="text" id="pictureLink" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <span>(somente números)</span>
                            <input type="text" id="whatsapp" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="biography">Biografia</label>
                            <input type="text" id="biography" />
                        </div>
                    </div>
                </div>

                <div className="data-container">
                    <div className="title-form">Sobre a aula</div>
                    <div className="questions-form">
                        <div className="input-block">
                            <label htmlFor="subject">Matéria</label>
                            <select className="subject" id="subject">
                                <option value="" disabled selected>Selecione qual você quer ensinar</option>
                                <option value="Artes">Artes</option>
                                <option value="Biologia">Biologia</option>
                                <option value="Ciências">Ciências</option>
                                <option value="Educação Física">Educação Física</option>
                                <option value="Física">Física</option>
                                <option value="Geografia">Geografia</option>
                                <option value="História">História</option>
                                <option value="Matemática">Matemática</option>
                                <option value="Português">Português</option>
                                <option value="Química">Química</option>
                            </select>
                        </div>

                        <div className="input-block">
                            <label htmlFor="cost">Custo da sua hora por aula</label>
                            <span>(em R$)</span>
                            <input type="text" id="cost" />
                        </div>
                    </div> 
                </div>

                <div className="data-container">
                    <div className="title-form">Horários disponíveis</div>
                    <div className="button-new">+ Novo horário</div>
                    
                    <div className="available-time">
                        <div className="input-block">
                            <label htmlFor="week-day">Dia da semana</label>
                            <select className="week-day" id="week-day">
                                <option value="" disabled selected>Selecione o dia</option>
                                <option value="Segunda">Segunda</option>
                                <option value="Terça">Terça</option>
                                <option value="Quarta">Quarta</option>
                                <option value="Quinta">Quinta</option>
                                <option value="Sexta">Sexta</option>
                            </select>
                        </div>

                        <div className="input-block">
                            <label htmlFor="das">Das</label>
                            <input type="text" id="das" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="ate">Até</label>
                            <input type="text" id="ate" />
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="warning-info">
                        <img src={warningIcon} alt="Importante!" />
                        <p>Importante!<br />Preencha todos os dados</p>
                    </div>
                    <div className="buttons-container">
                            <Link to= "" className='save'>
                                Salvar cadastro
                            </Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;