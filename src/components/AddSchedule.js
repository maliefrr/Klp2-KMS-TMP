import React from "react";
import { useState } from "react";

const AddSchedule = ({ text, onAdd, divisi }) => {
	const [agenda, setAgenda] = useState("");
	const [jadwal, setJadwal] = useState("");
	const submit = (e) => {
		e.preventDefault();
		if (!agenda || !jadwal) {
			alert("The Field cannot be empty");
			return;
		}
		onAdd({
			agenda,
			waktu: jadwal,
		});
		setAgenda("");
		setJadwal("");
	};
	return (
		<div>
			<div className="row">
				<div className="col-md">
					<h3 className="text-center">{text}</h3>
					<form className="mt-4" onSubmit={submit}>
						<div className="mb-3">
							<label htmlFor="agenda" className="form-label">
								Agenda Rapat
							</label>
							<input type="text" className="form-control" id="agenda" name="agenda" value={agenda} onChange={(e) => setAgenda(e.target.value)} />
						</div>
						<div className="mb-3">
							<label htmlFor="jadwal" className="form-label">
								Jadwal Rapat
							</label>
							<input type="text" className="form-control" id="jadwal" name="jadwal" value={jadwal} onChange={(e) => setJadwal(e.target.value)} />
						</div>
						<div className="mt-1 mb-3">
							<input type="submit" value="Submit" className="btn btn-primary" />
						</div>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
};

export default AddSchedule;
