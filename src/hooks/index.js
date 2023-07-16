import React, { createContext, useState } from "react";

import { api } from "../services";

export const HooksContext = createContext({});

const HooksProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [supplierId, setSupplierId] = useState({});
  const [fruits, setFruits] = useState([]);
  const [fruitId, setFruitId] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Essa função retorna uma lista de fornecedores
  function getSuppliers() {
    setIsLoading(true);
    api
      .get("/Supplier")
      .then((resp) => setSuppliers(resp.data))
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }

  // Essa função retorna um fornecedor
  function getSupplierById(id) {
    setIsLoading(true);
    api
      .get(`/Supplier/${id}`)
      .then((resp) => setSupplierId(resp.data))
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }

  // Essa função retorna uma fruta
  function getFruitById(id) {
    setIsLoading(true);
    api
      .get(`/Fruits/${id}`)
      .then((resp) => setFruitId(resp.data))
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }

  // Essa função retorna uma lista de frutas
  function getFruits() {
    setIsLoading(true);
    api
      .get("/Fruits")
      .then((resp) => setFruits(resp.data))
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }


  // Essa função edita uma fruta
  function updateFruit(data, id) {
    setIsLoading(true);
    api
      .patch(`/Fruits/${id}`, data)
      .then((resp) => {
        if (resp.data) getFruits();
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }

  // Essa função registra um fornecedor
  function RegisterSupplier(data) {
    setIsLoading(true);
    api
      .post("/Supplier", data)
      .then((resp) => {
        if (resp.data) getSuppliers();
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }


  // Essa função registra uma fruta
  function RegisterFruit(data) {
    setIsLoading(true);
    api
      .post("/Fruits", data)
      .then((resp) => {
        if (resp.data) getSuppliers();
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  }

  return (
    <HooksContext.Provider
      value={{
        suppliers,
        fruits,
        getSuppliers,
        getFruits,
        updateFruit,
        RegisterSupplier,
        RegisterFruit,
        isLoading,
        getSupplierById,
        getFruitById,
        supplierId,
        fruitId,
      }}
    >
      {children}
    </HooksContext.Provider>
  );
};

export default HooksProvider;
