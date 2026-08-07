import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import UploadBox from "./components/UploadBox/UploadBox";
import FileInfo from "./components/FileInfo/FileInfo";
import CopyButton from "./components/CopyButton/CopyButton";
import Preview from "./components/Preview/Preview";
import Loader from "./components/Loader/Loader";

const App = () => {
    const [file, setFile] = useState(null);
    const [markdown, setMarkdown] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFileUpload = (uploadedFile) => {
        setIsLoading(true);
        setFile(uploadedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
            setMarkdown(e.target.result);
            setIsLoading(false);
        };

        reader.readAsText(uploadedFile);
    };

    return (
        <div className="min-h-screen bg-slate-50 px-3 py-3 dark:bg-slate-950 sm:px-4 md:px-6 lg:px-8">
            <Navbar />

            <main className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-1 lg:mt-6 lg:grid-cols-3 lg:gap-6">
                <aside className="w-full min-w-0 rounded-2xl bg-white p-4 shadow-md dark:bg-slate-800 space-y-4 sm:space-y-6 sm:p-6 lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                    <UploadBox onFileUpload={handleFileUpload} />
                    <FileInfo file={file} markdown={markdown} />
                    <CopyButton markdown={markdown} />
                </aside>

                <section className="w-full min-w-0 rounded-2xl bg-white p-4 shadow-md dark:bg-slate-800 sm:p-6 lg:col-span-2 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                    {isLoading ? <Loader /> : <Preview markdown={markdown} />}
                </section>
            </main>
        </div>
    );
};

export default App;