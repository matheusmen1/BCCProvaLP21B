export default function Duvida(props) {
    const [duvida, setDuvida] = useState({
        nome: 0,
        duvida: "",

    }); // extrai essas informações da telaProduto 
    const [formValidado, setFormValidado] = useState(false);
    function manipularSubmissao(evento) {

        const form = evento.currentTarget;
        if (form.checkValidity()) {

            props.setListaDuvida([...props.listaDuvida, duvida]);
            props.setExibirTabela(true);

        }
        else {
            setFormValidado(true);
        }
    }

    evento.preventDefault();
    evento.stopPropagation();
}

function manipularMudanca(evento) {

    const elemento = evento.target.name;
    const valor = evento.target.value;
    setDuvida({ ...duvida, [elemento]: valor });
}
return (

    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="nome"
                required
                type="text"
                id="nome"
                name="nome"
                value={duvida.nome}
                onChange={manipularMudanca} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Duvida</Form.Label>
            <Form.Control type="text"
                required
                type="text"
                id="duvida"
                name="duvida"
                value={duvida.codigo}
                onChange={manipularMudanca} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Cadastrar
        </Button>
    </Form>

);




