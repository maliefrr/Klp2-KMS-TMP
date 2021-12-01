import Button from "./Button";
import { useState } from "react";
const Kerohanian = ({ data, onDelete, onUpdate }) => {
	const dataKewirausahaan = [...data].filter((el) => el.namaDivisi === "kewirausahaan");
	const [status, setStatus] = useState(false);
	const [edit, setEdit] = useState(false);
	const [id, setId] = useState("");
	const submit = (e) => {
		e.preventDefault();
		onUpdate({
			id,
			status,
		});
		window.location.reload(false);
		setEdit(false);
		setStatus(false);
	};
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
					{dataKewirausahaan.length >= 1 ? (
						dataKewirausahaan.map((el, index) => (
							<tr key={el._id}>
								<th scope="row">{index + 1}</th>
								<td>{el.namaProker}</td>
								<td>{el.penanggungJawab}</td>
								<td>{el.status === true ? "Selesai" : "Belum Selesai"}</td>
								<td>
									<div className="d-grid gap-2 d-md-flex">
										{edit === false ? (
											<>
												<Button onClick={() => onDelete(el._id)} text={<i className="bi bi-trash-fill"></i>} color="#dc3545" />
												<Button onClick={() => setEdit(!edit)} edit={setEdit} text={<i className="bi bi-pencil-fill"></i>} color="#0da4db" /> :
											</>
										) : (
											<>
												<form onSubmit={submit}>
													<input type="checkbox" className="" value={status} onChange={(e) => setStatus(e.currentTarget.checked)} />
													<Button text="Selesai" color="green" type="submit" onClick={() => setId(el._id)} />
												</form>
											</>
										)}
									</div>
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
