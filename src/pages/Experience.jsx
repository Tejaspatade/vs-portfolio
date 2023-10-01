const Experience = () => {
	return (
		<div className="w-full flex-grow pl-4 pt-4">
			<span className="text-[#ab7611]">{"{"}</span>
			<section className="pl-8">
				<span className="text-[#ab7611]">{'"experiences"'}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<span className="text-[#a35fb8]">{"["}</span>
				<section className="pl-8">
					<span className="text-[#1d7da9]">{"{"}</span> <br />
					<section className="pl-8">
						<span className="text-[#ab7611]">{'"title"'}</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<span className="text-[#069870]">
							{'"Full Stack Web-Dev Intern"'}
						</span>
						<span className="text-[#55575c]">,</span> <br />
						<span className="text-[#ab7611]">
							{'"company"'}
						</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<span className="text-[#069870]">{'"EHS-Prints"'}</span>
						<span className="text-[#55575c]">,</span> <br />
						<span className="text-[#ab7611]">
							{'"location"'}
						</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<span className="text-[#069870]">{'"Remote"'}</span>
						<span className="text-[#55575c]">,</span> <br />
						<span className="text-[#ab7611]">
							{'"duration"'}
						</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<span className="text-[#069870]">
							{'"July 2023 - Sept 2023"'}
						</span>
						<span className="text-[#55575c]">,</span> <br />
						<span className="text-[#ab7611]">{'"url"'}</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<a
							className="text-[#069870] hover:underline-offset-4 hover:underline"
							href="https://www.stencii.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							{'"www.stencii.com"'}
						</a>
						<span className="text-[#55575c]">,</span> <br />
						<span className="text-[#ab7611]">
							{'"description"'}
						</span>{" "}
						<span className="text-[#55575c]">:</span>{" "}
						<span className="text-[#069870]">
							{
								'"Developed the UI for their poster making & editing tool using React.JS, Redux, Tailwind & integrated with the backend on Node.JS, Express.JS with MongoDB"'
							}
						</span>
						<span className="text-[#55575c]">,</span> <br />
					</section>
					<span className="text-[#1d7da9]">{"}"}</span>
					<span className="text-[#55575c]">,</span> <br />
				</section>
				<span className="text-[#a35fb8]">{"]"}</span>
				<span className="text-[#55575c]">,</span> <br />
			</section>
			<span className="text-[#ab7611]">{"}"}</span>
		</div>
	);
};

export default Experience;
