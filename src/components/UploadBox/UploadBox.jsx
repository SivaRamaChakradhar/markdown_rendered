import { useState, useRef } from "react";

import { toast } from "sonner";

import {
  LuCloudUpload,
  LuFolderOpen,
} from "react-icons/lu";

const UploadBox = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const processFile = (file) => {

    if (
        !file.name.endsWith(".md") &&
        !file.name.endsWith(".markdown")
    ) {
        toast.error("Invalid file type.")
        return;
    }
      if (!file) return;

      onFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  }

  const handleDrop = (e) => {
    e.preventDefault();

    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    processFile(file);
  }


  return (
    <div className={`rounded-2xl border-2 border-dashed border-blue-500 p-4 text-center transition-all duration-200 sm:p-6 lg:p-8 ${isDragging
    ? "border-blue-500 bg-blue-50"
    : "border-slate-200"}
   `}>
      <LuCloudUpload
        size={56}
        className="mx-auto text-blue-600 mb-4"
      />

      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 sm:text-xl">
        Upload Markdown
      </h2>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Drag & drop your <span className="font-medium">.md</span> file here
        <br />
        or choose one from your computer.
      </p>

      <div 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
           onDrop={handleDrop} 
          className="mt-4 flex flex-col items-center gap-3 sm:mt-6 sm:gap-4"
        >
          <label className="group flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 dark:bg-slate-700 px-5 py-8 text-sm text-slate-500 dark:text-slate-400 transition hover:border-blue-300 hover:bg-slate-100 dark:hover:bg-slate-600 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
            <span className="mb-2 text-sm font-medium text-slate-400 sm:text-base">
              Drop your file here...
            </span>
            <span className="text-xs text-slate-400">
              Only .md and .markdown files are supported
            </span>
            <input
              onChange={(e) => {
                processFile(e.target.files[0]);
              }}
              type="file"
              accept=".md,.markdown"
              className="sr-only"
              ref={inputRef}
            />
          </label>
        <button onClick={() => inputRef.current.click()} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <LuFolderOpen size={18} />
            Choose File
        </button>
      </div>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        Supports .md and .markdown files
      </p>
    </div>
  );
};

export default UploadBox;