import React, { useState } from 'react';
import { useCart } from './CartContext';

export default function Header() {

  const { itemCount, showAlert, closeAlert } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };
  


    return (
      <>
      <nav id="header" className="px-6 py-3 sticky top-0 bg-[#494646] z-50 w-full">
      <div className="w-full flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          {/* Menu Mobile */}
          <i className="text-[#e7e4e4] hover:text-black fa-solid fa-bars" />
          <title>menu</title>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-[#e7e4e4] pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#Cardapio"
                >
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#Contato"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#Sobre"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="" id="logo">
          <a className="flex items-center" id="logomarca" href="#">
            <img
              src="logo.png"
              className="w-[10rem] h-[3rem] sm:w-[14rem] sm:h-[4rem]"
            />
          </a>
        </div>
        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <button
            className="inline-block no-underline hidden sm:block hover:text-black opacity-0 cursor-default"
            type="button"
          >
            <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-message ml-5" />
          </button>
          <button
            className="inline-block no-underline hidden sm:block hover:text-black opacity-0 cursor-default"
            type="button"
          >
            <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-message ml-5" />
          </button>
          <button
            className="inline-block no-underline hidden sm:block hover:text-black opacity-0 cursor-default"
            type="button"
          >
            <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-message ml-5" />
          </button>
          {/* User Icon */}
          <button
            id="user-button"
            onClick={openModal}
            className="inline-block no-underline hover:text-black"
            type="button"
          >
            <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-user" />
          </button>
          {/* Message Icon */}
          <button
            className="inline-block no-underline hover:text-black"
            type="button"
          >
            <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-message ml-5" />
          </button>
          {/* Shopping Icon */}
          <div className="relative inline-block">
            <a
              id="shopIcon"
              className="pl-5 inline-block no-underline hover:text-black"
              href="#"
            >
              <i className="text-[#e7e4e4] text-lg hover:text-black fa-solid fa-cart-shopping" />
            </a>
            <div
              id="cart-badge"
              className="bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full absolute -top-1 -right-1"
            >
              <span id="cart-count" className="text-xs">
                {itemCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div
        id="alerta"
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm font-bold px-4 py-3 z-50 w-full text-center ${showAlert ? '' : 'hidden'}`}
      >
        <button
          id="fechar-button"
          className="absolute top-0 right-0 transform translate-y-1/2 mr-3 px-2 py-1 text-white text-sm"
          onClick={closeAlert} // Adicione um evento de clique para fechar o alerta
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <p className="text-base">
          <i className="fa-solid fa-circle-exclamation text-lg mr-3" />
          Você só pode adicionar 10 produtos ao carrinho
        </p>
      </div>

      <div id="modal" className={`fixed ${modalVisible ? 'block' : 'hidden'} bg-gray-900 bg-opacity-60 inset-0 flex items-center justify-center z-50`}>
        <div className="w-full max-w-xs relative">
          <button id="botao-fechar" onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              <i className="fa-solid fa-xmark text-2xl" />
          </button>
          <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-xl">
            <h1 className="font-bold text-xl text-center text-[#617860]">Login</h1>
            <div className="my-4">
              <label className="block text-gray-700 text-base md:text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-2 flex justify-between items-center">
              <label className="block text-gray-700 text-base md:text-sm font-bold" htmlFor="senha">
                Senha
              </label>
              <div className="tooltip">
                <button id="tooltip" className="fa-solid fa-info-circle text-gray text-xl md:text-sm" />
                <span className="tooltiptext">A senha deve ter pelo menos 8 caracteres.</span>
              </div>
            </div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <input className="mr-2 leading-tight mb-5" type="checkbox" />
            <span className="text-sm">
              Lembrar da senha
            </span>
            <a className="inline-block align-baseline text-sm text-red-500 hover:text-red-800" href="#">
              Esqueceu a senha?</a>
            <div className="flex items-center justify-between mt-5">
              <button id="entrar-button" className="bg-[#617860] hover:bg-[#53A250] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Entrar
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Registrar-se
              </a>
            </div>
          </form>
        </div>
</div>


    </>


    )
}