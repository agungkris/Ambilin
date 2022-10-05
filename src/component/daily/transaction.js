import { Table } from "react-bootstrap"

export default function Transaction(){
    return(
        <div>
            <Table className="m-2" responsive>
            <thead>
              <tr>
                <th>NO</th>
                <th>ID</th>
                <th>WAKTU ORDER</th>
                <th>WAKTU SELESAI</th>
                <th>NAMA AGEN</th>
                <th>NAMA NASABAH</th>
                <th>VOLUME</th>
                <th>BIAYA</th>
                <th>STATUS</th>
                <th>AKSI</th>
              </tr>
              <tr>
                <td>1</td>
                <td>3590</td>
                <td>15.55</td>
                <td>16.05</td>
                <td>Agung Test Agen</td>
                <td>Krisnanda Partner</td>
                <td>Rp200.000</td>
                <td>Rp11.000</td>
                <td>Gagal</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>3589</td>
                <td>10.15</td>
                <td>10.25</td>
                <td>Made</td>
                <td>Dewantara</td>
                <td>Rp2.000.000</td>
                <td>Rp8.000</td>
                <td>Selesai</td>
                <td></td>
              </tr>
            </thead>
          </Table>
        </div>
    )
}