const Kerohanian = ({ data }) => {
	const dataKerohanian = [...data].filter((el) => el.namaDivisi === "kerohanian");
	console.log(dataKerohanian);
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nama Proker</th>
						<th scope="col">Nama Penanggung Jawab</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					{dataKerohanian.map((el, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{el.namaProker}</td>
							<td>{el.penanggungJawab}</td>
							<td>
								<div className="mb-3 mt-1">
									<input className="form-check-input" type="checkbox" />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Kerohanian;