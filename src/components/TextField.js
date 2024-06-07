import React, { useState } from "react";

function TextField({ heading }) {
	const [text, setText] = useState("");

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const toUppercase = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	const toLowercase = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const clear = () => {
		setText("");
	};

	return (
		<div className="w-4/5 mx-auto md:p-2 flex flex-col gap-4 py-4 md:flex-row">
			<div className="w-full md:w-1/2">
				<h2 className=" text-md text-center md:text-3xl mb-4 font-semibold">
					{heading}
				</h2>
				<textarea
					value={text}
					onChange={handleTextChange}
					className="w-full h-[250px] md:h-[480px] bg-slate-200 p-4 rounded-md"></textarea>

				<div className="my-3 flex flex-col md:flex-row gap-2">
					<button
						onClick={toUppercase}
						className="bg-blue-500 rounded-md px-4 py-2 text-center mr-2">
						To UpperCase
					</button>
					<button
						onClick={toLowercase}
						className="bg-yellow-500 rounded-md px-4 py-2 text-center mx-2">
						To LowerCase
					</button>
					<button
						onClick={clear}
						className="bg-pink-500 rounded-md px-4 py-2 text-center mx-2">
						Clear
					</button>
				</div>
			</div>
			<div className="w-full md:w-1/2">
				<h2 className="text-md md:text-3xl mb-4 font-semibold text-center">
					Preview
				</h2>
				<div className="grid md:grid-cols-2 gap-3">
					<div className="bg-cyan-200 text-cyan-950 rounded-md p-4 text-center">
						<span className="text-lg font-bold">{text.length}</span> Characters
					</div>
					<div className="bg-pink-200 text-pink-950 rounded-md p-4 text-center">
						<span className="text-lg font-bold">
							{text.split(" ").length - 1}
						</span>{" "}
						Words
					</div>
					<div className="bg-green-200 text-green-950 rounded-md p-4 text-center">
						<span className="text-lg font-bold">
							{((text.split(" ").length - 1) * 0.008).toFixed(2)}
						</span>{" "}
						Minutes to read
					</div>
				</div>
				<div className="bg-yellow-200 my-2 h-[400px] p-4 rounded-md relative overflow-y-auto">
					<button className="border-2 border-black px-2 rounded-md absolute top-2 right-2">
						copy
					</button>{" "}
					<p className="mt-6">{text}</p>
				</div>
			</div>
		</div>
	);
}

export default TextField;
