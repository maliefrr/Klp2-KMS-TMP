import React from "react";

const AddNew = ({ text }) => {
	return (
		<div>
			<div className="row">
				<div className="col-md">
					<h3 className="text-center">{text}</h3>
					<form className="mt-4">
						<div className="mb-3">
							<label htmlFor="namaProker" className="form-label">
								Program Kerja
							</label>
							<input type="text" className="form-control" id="namaProker" name="namaProker" />
						</div>
						<div className="mb-3">
							<label htmlFor="penanggungJawab" className="form-label">
								Penanggung Jawab
							</label>
							<input type="text" className="form-control" id="penanggungJawab" name="penanggungJawab" />
						</div>
						<div className="mb-3 mt-1">
							<label htmlFor="status" className="form-label" style={{ marginRight: "10px" }}>
								Status
							</label>
							<input className="form-check-input" type="checkbox" />
						</div>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
};

export default AddNew;
