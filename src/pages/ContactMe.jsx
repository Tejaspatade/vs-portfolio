const ContactMe = () => {
	return (
		<div className="w-full h-full pl-4 pt-4">
			<span className="text-[#35a7ad]">{".socials"}</span>{" "}
			<span className="text-[#ab7611]">{"{"}</span> <br />
			<section className="pl-8">
				<span className="text-[whitesmoke]">{"email"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer"
					href="mailto:tjspatade@gmail.comsubject=Subject%20Here&body=Hello%20from%20my%20website!"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"tjspatade@gmail.com"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"linkedin"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer"
					href="https://www.linkedin.com/in/tejpatade/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"tejpatade"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"github"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer"
					href="https://github.com/Tejaspatade"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"Tejaspatade"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"leetcode"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer"
					href="https://leetcode.com/TejSus/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"TejSus"}
				</a>
				<span className="text-[#55575c]">;</span>
			</section>
			<span className="text-[#ab7611]">{"}"}</span>
		</div>
	);
};

export default ContactMe;
