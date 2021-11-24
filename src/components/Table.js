import Button from "./Button";

const Table = () => {
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nama Divisi</th>
						<th scope="col">Progress</th>
						<th scope="col">Aksi</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Divisi Kerohanian</td>
						<td>25%</td>
						<td>
							<Button color="#3d2c8d" text="Detail" />
						</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Divisi Kewirausahaan</td>
						<td>33%</td>
						<td>
							<Button color="#3d2c8d" text="Detail" />
						</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Divisi Minat & Bakat</td>
						<td>0%</td>
						<td>
							<Button color="#3d2c8d" text="Detail" />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Table;
