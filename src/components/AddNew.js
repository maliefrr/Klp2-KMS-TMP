import React from "react";
import { useState } from "react";

const AddNew = ({ text, onAdd }) => {
	const [proker, setProker] = useState("");
	const [penanggungJawab, setPenanggungJawab] = useState("");
	const submit = (e) => {
		e.preventDefault();
		if (!proker || !penanggungJawab) {
			alert("The Field cannot be empty");
			return;
		}
		onAdd({
			proker,
			penanggungJawab,
		});
		setProker("");
		setPenanggungJawab("");
	};
	return (
		<div>
			<div className="row">
				<div className="col-md">
					<h3 className="text-center">{text}</h3>
					<form className="mt-4" onSubmit={submit}>
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
							<input className="form-check-input" type="checkbox" />
							<div className="mt-1">
								<input type="submit" value="Save Task" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
};

export default AddNew;
