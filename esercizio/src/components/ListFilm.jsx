import { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Carousel from 'react-bootstrap/Carousel';


class ListFilm extends Component {
    state = {
        listaFilm: [],
        isLoading: true,
        isError: false,
    }
    prendiFilm = () => {
        fetch('http://www.omdbapi.com/?apikey=5eba5f0f&s=' + this.props.query)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    listaFilm: data.Search,
                    isLoading: false,
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            });
    }
    componentDidMount() {
        this.prendiFilm()
    }

    render() {
        return (
            <Container>
                {this.state.isError && (
                    <Alert variant="danger">Qualcosa è andato storto!</Alert>
                )}
                {this.state.isLoading && (
                    <div className="text-center">
                        <Spinner animation="border" role="status" variant="success">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                <h2 className="text-white text-start">{this.props.title}</h2>
                <Row className="mb-2 justify-content-center">
                    {
                        this.state.listaFilm.map((film) => (
                            <Col xs={6} md={3} lg={2} className="film111 me-2" key={film._imbdID}>
                                <Card className="w=25">
                                    <Card.Img src={film.Poster} />
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </Container >
        )
    }
}

export default ListFilm