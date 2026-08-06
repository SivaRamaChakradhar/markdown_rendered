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
        <div className="min-h-screen bg-slate-50 px-4 py-4 md:px-6 lg:px-8">
            <Navbar />

            <main className="mt-6 grid gap-6 lg:grid-cols-3">
                
                <aside className="lg:sticky lg:top-4 lg:self-startw-full space-y-6 bg-white shadow-xl rounded-2xl p-6">
                    <UploadBox onFileUpload={handleFileUpload} />
                    <FileInfo file={file} markdown={markdown} />
                    <CopyButton markdown={markdown} />
                </aside>

                <section className="lg:col-span-2">
                    {isLoading ? <Loader /> : <Preview markdown={markdown}/>}
                </section>
            </main>
        </div>
    );
};

export default App;