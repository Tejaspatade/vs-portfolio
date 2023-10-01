import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandReact } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import {
	SiAmazonaws,
	SiExpress,
	SiMongodb,
	SiNodedotjs,
	SiPostman,
	SiRedux,
} from "react-icons/si";

const Home = () => {
	return (
		<div className="w-full flex-grow bg-white pl-8 pt-4 relative text-[#b7284a] select-none flex flex-col justify-center gap-2 bg-cover bg-center bg-no-repeat bg-bgimg">
			<h1 className="text-6xl font-bold">Tejas Patade</h1>
			<h1 className="text-4xl font-semibold opacity-70">
				Full Stack Web Developer
			</h1>
			<div className="flex gap-1 items-center">
				<TbBrandReact style={{ color: "#61dbfb" }} />
				<RiJavascriptFill style={{ color: "#f4dc54" }} />
				<BiLogoTypescript style={{ color: "#2c74c3" }} />
				<SiRedux style={{ color: "#9475c7" }} />
				<FaHtml5 style={{ color: "#e34c26" }} />
				<FaCss3Alt style={{ color: "#2c54e4" }} />
			</div>
			<div className="flex gap-1 items-center">
				<SiNodedotjs style={{ color: "#559d46" }} />
				<SiExpress style={{ color: "#9c9c9c" }} />
				<SiAmazonaws style={{ color: "#f49a28" }} />
			</div>
			<div className="flex gap-1 items-center">
				<FaGithub style={{ color: "#8b0cec" }} />
				<SiPostman style={{ color: "#f46c34" }} />
				<SiMongodb style={{ color: "#04d25c" }} />
			</div>
		</div>
	);
};

export default Home;
