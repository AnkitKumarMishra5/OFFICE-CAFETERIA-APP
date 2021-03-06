import {
  Row,
  Col,
  Card,
  Table,
  Button,
} from "react-bootstrap";

import {Link, withRouter} from 'react-router-dom';

import "./Preview.css";

const Preview = (props) => {
  const newUser = props.newUser;
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    props.handleSubmit()
    props.history.push('/success');
  }

  return (
    <Row className="justify-content-center" id="preview">
      <Col md={4} xs={12} className="preview-section">
        <h2>Preview Registration Details [2/3]</h2>
        <Card className="preview-card">
          <Card.Img
            variant="top"
            src={URL.createObjectURL(newUser.idCard)}
          />
          <Table responsive="xl">
            <tbody>
              <tr>
                <td>Name</td>
                <td className="values">{newUser.username}</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td className="values">{newUser.orgName}</td>
              </tr>
              <tr>
                <td>Employee ID</td>
                <td className="values">{newUser.employeeId}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="values email">{newUser.email}</td>
              </tr>
              <tr>
                <td>Mobile No.:</td>
                <td className="values">{newUser.mobile}</td>
              </tr>
            </tbody>
          </Table>

          <Card.Footer>
            <Card.Link as={Link} to="/form">
              <Button variant="danger">Edit</Button>
            </Card.Link>
            <Card.Link as={Link} to="/success">
              <Button variant="success" onClick={handleSubmit}>Proceed</Button>
            </Card.Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Preview);
