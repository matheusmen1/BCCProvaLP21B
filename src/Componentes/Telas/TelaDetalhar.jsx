import { Container, Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import { useState } from "react"
import DetalhesCandidato from "./DetalhesCandidato";
export default function TelaDetalhar(props) {
  
    return (
        <Container>
            <Pagina>
                <DetalhesCandidato/>
            </Pagina>
        </Container>
    );
}