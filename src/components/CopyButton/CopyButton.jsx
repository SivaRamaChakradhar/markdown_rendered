import { LuCopy } from "react-icons/lu";
import { copyRenderedContent } from "../../utils/clipboard";

import { toast } from "sonner";

import { FaRegLightbulb } from "react-icons/fa6";

const CopyButton = ({ markdown }) => {
    const handleCopy = async () => {

        try {
        const copied = await copyRenderedContent(markdown);


        toast.success(copied ? "Copied to clipboard!" : "Nothing to copy.")
    } catch (err) {
        console.error("HANDLE COPY ERROR:", err);
    }
    }
    return (
        <div className="w-full p-1">
            <h3 className="text-lg font-semibold text-slate-800">
                Actions
            </h3>

            <button
                type="button"
                onClick={handleCopy}
                className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-white font-medium transition hover:bg-blue-700 flex items-center justify-center gap-2"
            >
                <LuCopy size={18} />
                Copy Rendered Content
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
                Copies HTML, plain text and Markdown.
            </p>

            <div className="mt-6 flex gap-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
                <div className="mt-1">
                    <FaRegLightbulb size={20} className="text-purple-600" />
                </div>

                <div>
                    <h3 className="font-semibold text-purple-900">
                        Tip
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-purple-700">
                        Upload a <span className="font-medium">.md</span> or{" "}
                        <span className="font-medium">.markdown</span> file to preview
                        its contents. After rendering, you can copy the formatted
                        output for use in documents and editors.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CopyButton;