import React from "react";
import { useState } from "react";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");

	const types = ["image/png", "image/jpg", "image/jpeg"];

	const changeHandle = (e) => {
		let selected = e.target.files[0];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Pls select an image file (png, jpg or jpeg) !");
		}
	};

	return (
		<form>
			<input type="file" onChange={changeHandle} />
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
		</form>
	);
};

export default UploadForm;