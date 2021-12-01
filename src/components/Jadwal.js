import React from "react";

const Jadwal = ({ data }) => {
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Agenda Rapat</th>
						<th scope="col">Jadwal Rapat</th>
					</tr>
				</thead>
				<tbody>
					{data.map((el, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{el.agenda}</td>
							<td>{el.waktu}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Jadwal;
