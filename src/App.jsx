import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import UploadBox from "./components/UploadBox/UploadBox";
import FileInfo from "./components/FileInfo/FileInfo";
import CopyButton from "./components/CopyButton/CopyButton";
import Preview from "./components/Preview/Preview";

const App = () => {
    const [file, setFile] = useState(null);
    const [markdown, setMarkdown] = useState("");

    const handleFileUpload = (uploadedFile) => {
        setFile(uploadedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
            setMarkdown(e.target.result);
        };

        reader.readAsText(uploadedFile);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4">
            <Navbar />

            <main className="mt-6 grid gap-6 lg:grid-cols-3">
                
                <aside className="w-full space-y-6 bg-white shadow-xl rounded-2xl p-6">
                    <UploadBox onFileUpload={handleFileUpload} />
                    <FileInfo />
                    <CopyButton />
                </aside>

                <section className="lg:col-span-2">
                    <Preview markdown={markdown} />
                </section>
            </main>
        </div>
    );
};

export default App;