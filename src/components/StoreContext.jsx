import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const store = createContext();

export const StoreProvider = ({ children }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(1);
  const navigate = useNavigate();

  return (
    <store.Provider value={{ selectedTemplateId, setSelectedTemplateId, navigate }}>
      {children}
    </store.Provider>
  );
};
