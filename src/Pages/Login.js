import { useReducer } from "react";
import { userReducer, initialState } from "../Reducers/user";
import Seo from "../Components/Seo";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Login = () => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    const handlerSubmit = e => {
        e.preventDefault();
        const [ user, password] = e.target; 
        dispatch({type : "SET_USER", payload: {user: user.value, password: password.value}});
    }


    return ( 
        <>
        <Seo tittle="Login" description="El login del sitio" />
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handlerSubmit}>
                    <Form.Group>
                    <Form.Control 
                    type="text"
                    placeholder="usuario"
                    name="text"
                    />   
                    </Form.Group>

                    <Form.Group>
                    <Form.Control 
                    type="password"
                    placeholder="*****"
                    name="password"
                    />   
                    </Form.Group>
                    <Button type="submit">Logueate :D </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </>

     );
}
 
export default Login;