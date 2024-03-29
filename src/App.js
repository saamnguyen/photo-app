import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
	const [selectedImg, setSelectedImg] = useState(null);
	//console.log(selectedImg);

	return (
		<div className="App">
			<Title />
			<UploadForm />
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
			)}
		</div>
	);
}

export default App;
