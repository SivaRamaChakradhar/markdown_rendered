import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import { LuCloudUpload, } from "react-icons/lu";

const Preview = ({ markdown }) => {

    if (!markdown) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white dark:bg-slate-800 p-8 text-center shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600">
                    <LuCloudUpload size={36} />
                </div>
                <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Upload a Markdown file
                </h1>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Your rendered content will appear here once a .md or .markdown file is selected.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full space-y-6 bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 h-full scroll-overflow-y">
            <div className="border-b border-slate-200 dark:border-slate-600 px-6 py-4">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Markdown Preview</h2>
            </div>

            <div className="prose max-w-none p-8 overflow-x-auto text-slate-800 dark:prose-invert dark:text-slate-200">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Preview;