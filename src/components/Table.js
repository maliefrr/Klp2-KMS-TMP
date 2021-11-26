import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
	const navigate = useNavigate();
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
