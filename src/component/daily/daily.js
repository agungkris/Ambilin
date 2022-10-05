import { Card, Row, Col } from "react-bootstrap";
import "./daily.css";

export default function Daily() {
  return (
    <div className="body m-4">
      <div>
        <h1 style={{ fontSize: "30px" }}>
          <b>Daily</b>
        </h1>
        <p className="text">Senin, 3 Oktober 2022</p>
      </div>
      <div>
        <Row>
          <Col>
            <Card className="background">
              <Card.Body className="cardBody">
                <Card.Title style={{ fontSize: "16px" }}>
                  <b>Volume Setoran</b>
                </Card.Title>
                <img
                  className="img-card"
                  src="../assets/icon-volume-setoran.svg"
                  alt="volume setoran"
                ></img>
                <h3 style={{ fontSize: "24px" }}>
                  <b>Rp0</b>
                </h3>
                <p style={{ fontSize: "12px" }}>Selama satu hari</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="background2">
              <Card.Body>
                <Card.Title className="text" style={{ fontSize: "16px" }}>
                  <b>Biaya Penjemputan</b>
                </Card.Title>
                <img
                  className="img-card"
                  src="../assets/icon-biaya-penjemputan.svg"
                  alt="biaya penjemputan"
                ></img>
                <h3 style={{ fontSize: "24px" }}>
                  <b>Rp0</b>
                </h3>
                <p className="text" style={{ fontSize: "12px" }}>
                  Selama satu hari
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="background2">
              <Card.Body>
                <Card.Title className="text" style={{ fontSize: "16px" }}>
                  <b>Jumlah Transaksi</b>
                </Card.Title>
                <img
                  className="img-card"
                  src="../assets/icon-jumlah-transaksi.svg"
                  alt="jumlah transaksi"
                ></img>
                <h3 style={{ fontSize: "24px" }}>
                  <b>0</b>
                </h3>
                <p className="text" style={{ fontSize: "12px" }}>
                  Selama satu hari
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="background2">
              <Card.Body>
                <Card.Title className="text" style={{ fontSize: "16px" }}>
                  <b>Transaksi Selesai</b>
                </Card.Title>
                <img
                  className="img-card"
                  src="../assets/icon-transaksi-selesai.svg"
                  alt="transaksi selesai"
                ></img>
                <h3 style={{ fontSize: "24px" }}>
                  <b>0</b>
                </h3>
                <p className="text" style={{ fontSize: "12px" }}>
                  Selama satu hari
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
