const TopMenuBar = () => {
	return (
		<div className="col-span-2 h-8 flex items-center gap-3">
			<img src="favicon.png" alt="Logo" className="h-4" />
			<ul className="flex gap-2 text-sm text-[#969ca2] cursor-default">
				<li className="hover:text-white">File</li>
				<li className="hover:text-white">Edit</li>
				<li className="hover:text-white">View</li>
				<li className="hover:text-white">Run</li>
				<li className="hover:text-white">Terminal</li>
				<li className="hover:text-white">Help</li>
			</ul>
			<span className="font-semibold ml-96 cursor-pointer hover:text-[whitesmoke]">
				VS Portfolio
			</span>
		</div>
	);
};

export default TopMenuBar;
