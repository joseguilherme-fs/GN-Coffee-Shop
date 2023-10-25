import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemCount, setItemCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // Adicione este estado

  const incrementItemCount = () => {
    if (itemCount < 10) {
      setItemCount(itemCount + 1);
    } else {
      setShowAlert(true); // Exibe o alerta quando o limite de 10 produtos for atingido
    }
  };

  const closeAlert = () => {
    setShowAlert(false); // Função para fechar o alerta
  };

  return (
    <CartContext.Provider value={{ itemCount, incrementItemCount, showAlert, closeAlert }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
