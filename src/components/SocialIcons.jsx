import { Github,Linkedin,Twitter, Instagram} from "lucide-react";


export default function SocialIcons() {
    return (
        <div className="flex justify-center gap-4">
			<a
				href="https://github.com/yakindario"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-600 hover:text-black transition"
			>
				<Github size={24} />
			</a>
			<a
				href="https://www.linkedin.com/in/yakindario/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-600 hover:text-blue-700 transition"
			>
				<Linkedin size={24} />
			</a>
			<a
				href="https://x.com/yakindario"
				target="_blank"
				rel="noopener noreferrer"
				className="text-gray-600 hover:text-blue-500 transition"
			>
				<Twitter size={24} />
			</a>
            <a
                href="https://www.instagram.com/yakindario/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
            >
                <Instagram size={24} />
            </a>
			
		</div>
    );
}