import Button from "./Button";
const Kerohanian = ({ data, onDelete }) => {
	const dataKerohanian = [...data].filter((el) => el.namaDivisi === "kerohanian");
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nama Proker</th>
						<th scope="col">Nama Penanggung Jawab</th>
						<th scope="col">Status</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{dataKerohanian.length >= 1 ? (
						dataKerohanian.map((el, index) => (
							<tr key={el._id}>
								<th scope="row">{index + 1}</th>
								<td>{el.namaProker}</td>
								<td>{el.penanggungJawab}</td>
								<td>
									<div className="mb-3 mt-1">
										<input className="form-check-input" type="checkbox" defaultChecked={el.status} onClick={() => !el.status} />
									</div>
								</td>
								<td style={{ border: "none" }}>
									<Button onClick={() => onDelete(el._id)} text={<i className="bi bi-trash-fill"></i>} color="#dc3545" />
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">
								<div className="alert alert-danger text-center" role="alert">
									Data proker masih kosong
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default Kerohanian;
