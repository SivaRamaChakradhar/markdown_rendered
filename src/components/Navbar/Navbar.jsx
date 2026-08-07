import { LuFileText } from "react-icons/lu";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeProvider";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
       <nav className="bg-white dark:bg-slate-800 shadow-sm rounded-2xl px-6 py-4 mb-4 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <LuFileText
                        className="text-blue-600"
                        size={24}
                    />
                </div>

                <div>
                    <h1 className="text-xl font-bold text-gray-800 text-slate-50">
                        Markdown Renderer
                    </h1>

                    <p className="text-sm text-gray-500">
                        Upload, preview and copy Markdown
                    </p>
                </div>
            </div>

            {/* Right */}
            <button
                onClick={toggleTheme}
                type="button"
                aria-label="Toggle theme"
                className="rounded-lg bg-gray-100 dark:bg-slate-600 p-2 text-gray-600 dark:text-gray-200"
            >
                {theme === "light" ? (
                    <MdDarkMode size={20} />
                ) : (
                    <MdLightMode size={20} />
                )}
            </button>

        </nav>
    );
}

export default Navbar;