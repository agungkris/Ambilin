import { Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";

function Login() {
  return (
    <div>
      <div
        className="wrapper"
        style={{ backgroundImage: "url('../bgdashboard.png')" }}
      >
        <div className="body p-5">
          <div>
            <Row>
              <Col>
                <h1>Selamat Datang</h1>
                <h1>di Dashboard Ambilin</h1>
                <h5 className="text-muted">
                  Ayo amati transaksi harian agen dan nasabah
                </h5>
              </Col>
              <Col>
                <img className="float-end" src="../logo.png" alt="logo" />
              </Col>
            </Row>
          </div>

          <div className="d-flex flex-row-reverse">
            <Form
              className="shadow-lg p-3 mb-5 bg-body rounded"
              style={{ width: "25rem", height: "25rem" }}
            >
              <Form.Group className="mb-3">
                <Form.Label>
                  <h2>Masuk</h2>
                </Form.Label>
                <Form.Label className="text-muted">
                  Silahkan masukkan Email dan Kata Sandi Anda
                </Form.Label>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="nama@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukan Kata Sandi"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="d-grid">
                <Button className="btn btn-warning btn-block" type="submit">
                  Masuk
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* <img className="wrapper" src="../bgdashboard.png"/> */}
    </div>
  );
}

export default Login;
