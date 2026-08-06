import { LiaFileSolid } from "react-icons/lia";

const FileInfo = ({ file, markdown }) => {

    const fileSize = `${(file?.size / 1024).toFixed(2)} KB`;

    const lineCount = markdown.split("\n").length;

   if (!file) {
        return (
            <div className="p-1">
                <h3 className="text-lg font-semibold text-slate-800">
                    File Information
                </h3>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">
                        No file selected.
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                        Upload a markdown file to view its details.
                    </p>
                </div>
            </div>
        );
    }
    return (
       <div className="mt-4 rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <LiaFileSolid className="text-blue-600" size={22} />
                </div>
                <div>
                    <p className="font-medium text-slate-800">
                        {file.name}
                    </p>
                    <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                        Markdown
                    </span>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                    <p className="text-xs text-slate-500">
                        Size
                    </p>
                    <p className="font-medium">
                        {fileSize}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-slate-500">
                        Lines
                    </p>
                    <p className="font-medium">
                        {lineCount}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FileInfo;