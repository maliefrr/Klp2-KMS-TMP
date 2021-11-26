import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Table = () => {
	const navigate = useNavigate();
	const data = [
		{
			id: 1,
			namaDivisi: "kerohanian",
			namaProker: "Belajar membaca Alqur’an",
			status: false,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 2,
			namaDivisi: "kerohanian",
			namaProker: "Taddarus Alqur’an",
			status: false,
			penanggungJawab: "Ld. Hasrinto",
		},
		{
			id: 3,
			namaDivisi: "kerohanian",
			namaProker: "Ilkom Beramal",
			status: false,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 4,
			namaDivisi: "kerohanian",
			namaProker: "Ilkom Beramal",
			status: false,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 5,
			namaDivisi: "kewirausahaan",
			namaProker: "Seminar Kewirausahaan ",
			status: false,
			penanggungJawab: "Nining Ardianti",
		},
		{
			id: 6,
			namaDivisi: "kewirausahaan",
			namaProker: "Usaha HMPS Ilkom",
			status: false,
			penanggungJawab: "Muhammad ulil Amri",
		},
	];
	const namaDivisi = data.map((el) => {
		return el.namaDivisi;
	});
	const unique = namaDivisi.filter((value, index, self) => {
		return self.indexOf(value) === index;
	});
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nama Divisi</th>
						<th scope="col">Aksi</th>
					</tr>
				</thead>
				<tbody>
					{unique.map((el, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{el}</td>
							<td>
								<Button color="#3d2c8d" text="Detail" onClick={() => navigate(`/proker/${el}`)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
