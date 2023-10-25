import React, { useState } from 'react';

export default function Contato() {

    const [enviadoVisible, setEnviadoVisible] = useState(false);

    const [enviadoOpacity, setEnviadoOpacity] = useState(0);


    const handleEnviarClick = () => {
        setEnviadoVisible(true);
        setEnviadoOpacity(100);
      
        // After 3 seconds, reset the visibility and opacity
        setTimeout(() => {
          setEnviadoOpacity(0);
          setTimeout(() => {
            setEnviadoVisible(false);
          }, 1000);
        }, 3000);
      };      

      const [selectedOption, setSelectedOption] = useState('');

      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

      };

    return (
        <section id="Contato" className="border-t border-[#494646] py-8">
  <div className="container px-6 mx-auto">
    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-12">
      <i className="fa-solid fa-envelope" /> Entre em contato conosco
    </a>
    <div className="flex justify-center">
      <div className="w-1/2 hidden xl:block ">
        <img className="rounded-lg mt-20" src="Imagens/bolo.png" alt="Imagem" />
      </div>
      {/* Formulário */}
      <div id="formulario" className="p-0 mt-5 sm:ml-40 sm:p-12">
        <div className="w-full sm:w-[450px] px-14 py-14 md:py-14 md:px-20 sm:px-24 bg-white border-0 shadow-lg rounded-3xl">
          <h1 className="text-2xl font-black mb-8 text-center">Mensagem</h1>
          <form id="form" noValidate>
            <div className="relative z-0 w-full mb-5">
              <input type="text" name="name" placeholder=" " required className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
              <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu nome</label>
              <span className="text-sm text-red-600 hidden" id="error">Nome é requirido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input type="email" name="email" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
              <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu e-mail</label>
              <span className="text-sm text-red-600 hidden" id="error">Endereço de e-mail é requirido.</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <select
                name="select"
                value={selectedOption}
                onChange={handleOptionChange}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                <option value="" selected disabled hidden></option>
                <option value="Orçamento">Orçamento</option>
                <option value="Ajuda">Ajuda</option>
                <option value="Parcerias">Parcerias</option>
                <option value="Dúvidas">Dúvidas</option>
                </select>
                <label htmlFor="select" className={`absolute duration-300 top-3 -z-1 origin-0 ${selectedOption ? 'text-black' : 'text-gray-500'}`}>
                Selecione uma opção
                </label>
            </div>

            
            <textarea id="message" rows={4} className="resize-none block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500" placeholder="Escreva sua mensagem aqui..." defaultValue={""} />
            <button
            id="button-enviar"
            type="button"  // Change this line from "submit" to "button"
            onClick={handleEnviarClick}
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-[#617860] hover:bg-[#53A250] hover:shadow-lg focus:outline-none font-bold"
            >
            Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div> 
  <div
  id="enviado"
  className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg text-sm`}
  style={{ opacity: `${enviadoOpacity}%`, display: enviadoVisible ? 'block' : 'none' }}
>
  <i className="fa-solid fa-check text-sm" /> Enviado com sucesso!
</div>       
</section>



    )
}