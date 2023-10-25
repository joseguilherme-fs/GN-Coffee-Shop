import React from 'react';
import { useCart } from './CartContext';


export default function Produtos() {
    const { itemCount, incrementItemCount } = useCart(); // Use o contexto

    return (

      <section id="Cardapio" className="bg-[#e7e4e4] mt-5">
  <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 justify-between">
    <nav id="store" className="w-full z-30 top-0 px-5">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 mb-10">
        <a
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
          href="#"
        >
          <i className="fa-solid fa-mug-hot" /> Cardápio
        </a>
        <div className="flex items-center" id="store-nav-content">
          <a className="pl-3 inline-block no-underline" href="#">
            <i className="fa-solid fa-ellipsis-vertical hover:text-black text-gray" />
          </a>
        </div>
      </div>

      {/* Buscar */}

      <div id="buscar" className="relative mt-6 max-w-lg shadow mx-auto mb-16">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          className="w-full border rounded-md pl-10 pr-2 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Buscar"
          wfd-id="id0"
        />
      </div>
    </nav>

    {/* LISTA DE PRODUTOS */}

    <div className="flex flex-row flex-wrap justify-around">
      <div className="produto w-[156px] h-[320px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4 border-[#e7e4e4]"
            src="Imagens/cafe.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Café</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
        </a>
        <a className="text-[#a6a6a6] text-sm" href="#">
          Tradicional (com ou sem açúcar)
        </a>
        <p className="pt-9 sm:pt-2 md:pt-2 text-white">R$ 4.99</p>
      </div>

      <div className="produto w-[156px] h-[320px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/capuccino.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Cappuccino</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
          <p className="text-[#a6a6a6] text-sm " href="#">
            Tradicional ou alpino
          </p>
          <p className="pt-9 sm:pt-2 md:pt-2 text-white">R$ 7.99</p>
        </a>
      </div>

      <div className="produto w-[156px] h-[320px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/frapuccinooreo.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Frapuccino</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
          <p className="text-[#a6a6a6] text-sm " href="#">
            Sabor oreo
          </p>
          <p className="pt-14 sm:pt-2 md:pt-2 text-white">R$ 13.99</p>
        </a>
      </div>

      <div className="produto w-[156px] h-[320px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/brownie.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Brownie</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
        </a>
        <a className="text-[#a6a6a6] text-sm" href="#">
          Feitos com chocolate belga
        </a>
        <p className="pt-8 sm:pt-2 md:pt-2 text-white">R$ 11.99</p>
      </div>

      <div className="produto w-[156px] h-[350px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/waffle.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Waffle</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
        </a>
        <a className="text-[#a6a6a6] text-sm" href="#">
          Acompanhamentos variados
        </a>
        <p className="pt-16 sm:pt-2 md:pt-2 text-white">R$ 15.99</p>
      </div>

      <div className="produto w-[156px] h-[350px] sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18.3rem] lg:w-[18rem] 2xl:w-[30rem] 2xl:w-[30rem] border-4"
            src="Imagens/cheesecake.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Cheesecake</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
          <p className="text-[#a6a6a6] text-sm " href="#">
            Frutas vermelhas. Vendidos por fatia.
          </p>
          <p className="pt-4 sm:pt-2 md:pt-2 text-white">R$ 15.99</p>
        </a>
      </div>
      <div className="produto w-[156px] h-[350px] sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/paodequeijo.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Pão de queijo</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
        </a>
        <p className="text-[#a6a6a6] text-sm " href="#">
          <a className="relative block">Feitos na hora, porção de 200g</a>
        </p>
        <p className="pt-14 sm:pt-2 md:pt-2 text-white">R$ 10.99</p>
      </div>
      <div className="produto w-[156px] h-[350px]  sm:h-1/4 sm:w-1/4 shadow-lg p-5 mr-1 md:mr-1 xl:mr-2 mb-12 bg-[#617860]">
        <a className="relative block">
          <img
            className="hover:grow hover:shadow-lg h-[8rem] w-[10rem] sm:h-[7rem] sm:w-[18rem] lg:h-[18rem] lg:w-[18rem] 2xl:w-[30rem] border-4"
            src="Imagens/bolodebanana.jpg"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="titulo text-white">Bolo de banana</p>
            <button
              className="comprar-button fa-solid fa-cart-plus text-[#e7e4e4] hover:text-black cursor-pointer text-2xl"
              type="button"
              onClick={incrementItemCount}
            />
          </div>
          <i className="fa-solid fa-heart text-white hover:text-red-500 absolute top-0 right-0 m-2 cursor-pointer text-xl">
            {" "}
          </i>
          <p className="text-[#a6a6a6] text-sm">
            Feitos com canela. Vendidos por fatia.
          </p>
          <p className="pt-7 sm:pt-2 md:pt-2 text-white">R$ 13.99</p>
        </a>
      </div>
    </div>
  </div>
</section>

        

    )
}