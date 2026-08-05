import { useRef } from "react";

import {
  LuCloudUpload,
  LuFolderOpen,
} from "react-icons/lu";

const UploadBox = ({ onFileUpload }) => {
  const inputRef = useRef(null);
  return (
    <div className="rounded-2xl border border-dashed border-blue-200 p-8 text-center">
      <LuCloudUpload
        size={56}
        className="mx-auto text-blue-600 mb-4"
      />

      <h2 className="text-xl font-semibold text-slate-800">
        Upload Markdown
      </h2>

      <p className="text-sm text-slate-500 mt-2">
        Drag & drop your <span className="font-medium">.md</span> file here
        <br />
        or choose one from your computer.
      </p>

      <div className="mt-6 flex flex-col items-center gap-4">
        <label className="group flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-8 text-sm text-slate-500 transition hover:border-blue-300 hover:bg-slate-100 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
          <span className="mb-2 text-base font-medium text-slate-700">
            Click to browse or drag and drop
          </span>
          <span className="text-xs text-slate-400">
            Only .md and .markdown files are supported
          </span>
          <input
            onChange={(e) => {
              const file = e.target.files[0];
              onFileUpload(file);
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

      <p className="mt-4 text-xs text-slate-400">
        Supports .md and .markdown files
      </p>
    </div>
  );
};

export default UploadBox;