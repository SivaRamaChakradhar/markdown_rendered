import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const Preview = ({ markdown }) => {
    return (
        <div className="w-full space-y-6 bg-white shadow-xl rounded-2xl p-6 h-full">
            <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-lg font-semibold">Markdown Preview</h2>
            </div>

            <div className="prose max-w-none p-8 overflow-x-auto">
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