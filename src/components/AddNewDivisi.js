import React from "react";
import { useState } from "react";

const AddNewDivisi = ({ onAdd }) => {
	const [status, setStatus] = useState(false);
	const [proker, setProker] = useState("");
	const [penanggungJawab, setPenanggungJawab] = useState("");
	const [namaDivisi, setNamaDivisi] = useState("");
	const submit = (e) => {
		e.preventDefault();
		if (!proker || !penanggungJawab) {
			alert("The Field cannot be empty");
			return;
		}
		onAdd({
			namaDivisi,
			namaProker: proker,
			penanggungJawab,
			status,
		});
		setProker("");
		setPenanggungJawab("");
		setPenanggungJawab("");
	};
	const divisi = ["kerohanian", "kewirausahaan", "Minat & Bakat"];
	return (
		<div>
			<div className="row">
				<div className="col-md">
					<form className="mt-4" onSubmit={submit}>
						<div className="mb-3">
							<label htmlFor="namaDivisi" className="form-label">
								Divisi
							</label>
							<select className="form-select" onChange={(e) => setNamaDivisi(e.currentTarget.value)}>
								<option disabled={true} selected={true}>
									{" "}
									Pilih Divisi{" "}
								</option>
								{divisi.map((namaDivisi, index) => (
									<option value={namaDivisi} key={index}>
										{namaDivisi}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="namaProker" className="form-label">
								Program Kerja
							</label>
							<input type="text" className="form-control" id="namaProker" name="namaProker" value={proker} onChange={(e) => setProker(e.target.value)} />
						</div>
						<div className="mb-3">
							<label htmlFor="penanggungJawab" className="form-label">
								Penanggung Jawab
							</label>
							<input type="text" className="form-control" id="penanggungJawab" name="penanggungJawab" value={penanggungJawab} onChange={(e) => setPenanggungJawab(e.target.value)} />
						</div>
						<div className="mb-3 mt-1">
							<label htmlFor="status" className="form-label" style={{ marginRight: "10px" }}>
								Status
							</label>
							<input className="form-check-input" type="checkbox" value={status} onChange={(e) => setStatus(e.currentTarget.checked)} />
							<div className="mt-1">
								<input type="submit" value="Submit" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
};

export default AddNewDivisi;
