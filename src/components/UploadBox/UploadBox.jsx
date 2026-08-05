import {
  LuCloudUpload,
  LuFolderOpen,
} from "react-icons/lu";

const UploadBox = () => {
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

      <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
        <LuFolderOpen size={18} />
        Choose File
      </button>

      <p className="mt-4 text-xs text-slate-400">
        Supports .md and .markdown files
      </p>
    </div>
  );
};

export default UploadBox;