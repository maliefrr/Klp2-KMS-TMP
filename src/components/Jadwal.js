import React from "react";
import Button from "./Button";

const Jadwal = ({ data, onDelete }) => {
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Agenda Rapat</th>
						<th scope="col">Jadwal Rapat</th>
						<th scope="col">Aksi</th>
					</tr>
				</thead>
				<tbody>
					{data.map((el, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{el.agenda}</td>
							<td>{el.waktu}</td>
							<td>
								<Button text={<i className="bi bi-trash-fill"></i>} color="#dc3545" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Jadwal;
