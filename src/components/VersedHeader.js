import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types'

function VersedHeader(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

VersedHeader.prototype = {
    title : PropTypes.string.isRequired
};

export default VersedHeader;