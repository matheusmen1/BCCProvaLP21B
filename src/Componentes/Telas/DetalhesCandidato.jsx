import Candidato from "./elementos/Candidato";
import GridCandidatos from "./GridCandidatos";
import TelaPrincipal from "./TelaPrincipal";
import { Button, Container, Table } from "react-bootstrap";
export default function DetalhesCandidato(props) {
    function cadastrar(){
        props.exibirTabela(false);
    }
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>ID</th>
                    <th>email</th>
                    <th>nome</th>
                    <th>avatar</th>
                    <th>proposta</th>
                    <th>curtida</th>
                    <th>descurtida</th>
                    <th>questionamentos</th>
                    <th>Açoes</th>
                </thead>
                <tbody>
                    {
                        props.listaCandidatos?.map((candidato) => {
                            return (
                                <tr>
                                    <td>{candidato.id}</td>
                                    <td>{candidato.email}</td>
                                    <td>{candidato.nome}</td>
                                    <td><img style={{ "width": "40px", "height": "40px" }} src={candidato.avatar} alt="foto do produto" /></td>
                                    <td>{candidato.propostas}</td>
                                    <td>{candidato.curtidas}</td>
                                    <td>{candidato.descurtidas}</td>
                                    <td>{candidato.questionamentos}</td>
                                    <td>
                                        <Button onClick={()=>{
                                            cadastrar();
                                        }}>Registrar Duvidas</Button>

                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <Button>Voltar</Button>
        </Container>
        
    );
}