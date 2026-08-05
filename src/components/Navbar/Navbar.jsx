import { LuFileText } from "react-icons/lu";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm rounded-2xl px-6 py-4 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <LuFileText
                        className="text-blue-600"
                        size={24}
                    />
                </div>

                <div>
                    <h1 className="text-xl font-bold text-gray-800">
                        Markdown Renderer
                    </h1>

                    <p className="text-sm text-gray-500">
                        Upload, preview and copy Markdown
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;