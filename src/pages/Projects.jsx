import Project from "../components/Project";

const projs = [
	{
		image: "das-hotel.png",
		title: "Das Hotel",
		description:
			"React App that leverages Supabase for efficient storage of hotel bookings, cabins data, and employee accounts.",
		tags: ["React", "Supabase", "Redux", "React Query"],
		url: "https://das-hotel.vercel.app/",
	},
	{
		image: "lizard-spock-rock.png",
		title: "Lizard-Spock-Rock",
		description:
			"Simple Rock-Paper-Scissors game with a twist. Inspired by The Big Bang Theory Show. Also adds Lizard & Spock.",
		tags: ["HTML", "CSS", "JS"],
		url: "https://spock-rock-tejas.netlify.app/",
	},
	{
		image: "sliced.png",
		title: "Sliced",
		description:
			"Simple Rock-Paper-Scissors game with a twist. Inspired by TBBT",
		tags: ["React", "Tailwind"],
		url: "https://sliced-tejas.netlify.app/",
	},
	{
		image: "movied.png",
		title: "Movied",
		description:
			"Simple Rock-Paper-Scissors game with a twist. Inspired by TBBT",
		tags: ["React", "Context API"],
		url: "https://movied-tejas.netlify.app/",
	},
];

const Projects = () => {
	return (
		<div className="w-full flex-grow pl-4 pt-8 grid grid-cols-4 gap-2 items-center">
			{projs.map((proj, i) => (
				<Project
					key={i}
					image={proj.image}
					title={proj.title}
					description={proj.description}
					tags={proj.tags}
					url={proj.url}
				/>
			))}
		</div>
	);
};

export default Projects;
