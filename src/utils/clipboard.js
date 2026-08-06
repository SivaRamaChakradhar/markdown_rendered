import { remark } from "remark";
import html from "remark-html";

export const copyRenderedContent = async (markdown) => {
    if (!markdown || typeof markdown !== "string" || !markdown.trim()) {
        return false;
    }

    try {
        // Markdown → HTML
        const processed = await remark()
            .use(html)
            .process(markdown);

        const htmlContent = processed.toString();

        // Plain text
        const plainText = markdown
            .replace(/[#>*_`~-]/g, "")
            .replace(/\[(.*?)\]\((.*?)\)/g, "$1");

        // First try: HTML + Plain Text + Markdown
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    "text/html": new Blob([htmlContent], {
                        type: "text/html",
                    }),

                    "text/plain": new Blob([plainText], {
                        type: "text/plain",
                    }),

                    "text/markdown": new Blob([markdown], {
                        type: "text/markdown",
                    }),
                }),
            ]);
        } catch (err) {
            console.warn(
                "text/markdown not supported. Falling back to HTML + Plain Text."
            );

            // Fallback for browsers like Chrome
            await navigator.clipboard.write([
                new ClipboardItem({
                    "text/html": new Blob([htmlContent], {
                        type: "text/html",
                    }),

                    "text/plain": new Blob([plainText], {
                        type: "text/plain",
                    }),
                }),
            ]);
        }

        return true;
    } catch (err) {
        console.error("Clipboard error:", err);
        return false;
    }
};