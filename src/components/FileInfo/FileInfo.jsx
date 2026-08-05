import { LiaFileSolid } from "react-icons/lia";

const FileInfo = () => {
    return (
        <div className="p-1">
            <h3 className="text-lg font-semibold text-slate-800">
                File Information
            </h3>

            <div className="rounded-2xl border border-gray-200 p-4 mt-4">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                        <LiaFileSolid className="h-6 w-6 text-slate-400" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-800">
                            example.md
                        </p>
                        <p className="text-xs text-slate-500">
                            1.2 MB • Modified 2 days ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileInfo;