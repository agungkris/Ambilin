import { Row, Col, Form, Button} from "react-bootstrap";
import "./login.css";

export default function Login() {
  return (
    <div>
      <div
        className="wrapper"
        style={{ backgroundImage: "url('../bgdashboard.png')" }}
      >
        <div className="body px-5 py-4">
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
              <Row>
                <Col><img
                    className="logo float-end"
                    src="../logo.png"
                    alt="logo"
                  /></Col>
              </Row>
              <Row>
                <Col><div className="d-flex flex-row-reverse">
                  <Form
                    className="shadow-lg p-3 bg-body rounded"
                    style={{ width: "25rem", height: "25rem" }}
                  >
                    <Form.Group>
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
                      <Link to="/forgotPassword">Lupa Sandi?</Link>
                      <Form.Control
                        type="password"
                        placeholder="Masukan Kata Sandi"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button
                        className="btn btn-block rounded-pill"
                        aria-label="Close"
                        type="submit"
                      >
                        Masuk
                      </Button>
                    </div>
                  </Form>
                </div></Col>
              </Row>                
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
