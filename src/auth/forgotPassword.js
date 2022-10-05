import { Form, Button } from "react-bootstrap";

export default function ForgotPassword() {
  return (
    <div className="d-flex flex-row-reverse">
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
    </div>
  );
}
