import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SocialIcons() {
    // Clases comunes para limpiar el código
    const iconClass = "text-gray-500 hover:text-gray-900 hover:scale-110 transition-all duration-200";

    return (
        <div className="flex justify-center gap-6">
            <a href="https://github.com/yakindario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconClass}>
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yakindario/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`text-gray-500 hover:text-[#0077b5] hover:scale-110 transition-all duration-200`}>
                <Linkedin size={24} />
            </a>
            <a href="https://x.com/yakindario" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" className={`text-gray-500 hover:text-black hover:scale-110 transition-all duration-200`}>
                <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/yakindario/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`text-gray-500 hover:text-[#E1306C] hover:scale-110 transition-all duration-200`}>
                <Instagram size={24} />
            </a>
        </div>
    );
}