import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";

export function Home() {
  return (
    <div>
      <h1>Home</h1> 
      <ListaProdutos />
    </div>
  );
}
