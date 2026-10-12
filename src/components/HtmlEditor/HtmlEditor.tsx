import { FC, useMemo, useState } from "react";

import Editor from "react-simple-wysiwyg";

import { useTheme } from "@mui/material";

/* props for Html editor */
export interface HtmlEditorProps {
    name: string;
    value: string;
    height?: string;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onDrop?(id: string): any;
}

export const HtmlEditor: FC<HtmlEditorProps> = ({
    name,
    value,
    onChange,
    onDrop,
    label,
    helperText,
    disabled = false,
    height = "320px",
}) => {
    const theme = useTheme() as any;
    const styles = theme?.palette?.htmlEditor;

    const [isDraggingOver, setIsDraggingOver] = useState(false);

    // Live counts for enterprise status footer
    const stats = useMemo(() => {
        const plainText = (value || "").replace(/<[^>]*>/g, " ").trim();

        const chars = plainText.length;

        const words = plainText
            ? plainText.split(/\s+/).length
            : 0;

        return { chars, words };
    }, [value]);

    const handleChange = (e: any) => {
        if (onChange) onChange(e.target.value);
    };

    const handleDrop = (
        event: React.DragEvent<HTMLDivElement>,
    ) => {
        setIsDraggingOver(false);

        const id = event.dataTransfer.getData("text/plain");

        if (id) {
            event.preventDefault();

            if (onDrop) onDrop(id);
        }
    };

    const handleDragOver = (
        event: React.DragEvent<HTMLDivElement>,
    ) => {
        event.preventDefault();

        if (!isDraggingOver) setIsDraggingOver(true);
    };

    const handleDragLeave = (
        event: React.DragEvent<HTMLDivElement>,
    ) => {
        event.preventDefault();

        setIsDraggingOver(false);
    };

    return (
        <div
            css={styles.container}
        >
            {/* Optional Header / Label Row */}
            {label && (
                <div
                    css={styles.labelContainer}
                >
                    <span
                        css={styles.label}
                    >
                        {label}
                    </span>
                </div>
            )}

            {/* Main Styled Container */}
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                css={{
                    ...styles.editorContainer,

                    ...(isDraggingOver
                        ? styles.editorContainerDragging
                        : {}),

                    ...(disabled
                        ? styles.disabled
                        : {}),

                    "&:hover": {
                        ...(isDraggingOver
                            ? styles.editorContainerDragging
                            : styles.editorContainerHover),
                    },

                    "&:focus-within": {
                        ...styles.editorContainerFocus,
                    },

                    /* Library Component Internal Styling */
                    ".rsw-editor": {
                        ...styles.editor,
                    },

                    /* Toolbar Section */
                    ".rsw-toolbar": {
                        ...styles.toolbar,
                    },

                    /* Toolbar Icon Buttons */
                    ".rsw-btn": {
                        ...styles.toolbarButton,

                        "&:hover": {
                            ...styles.toolbarButtonHover,
                        },

                        "&[data-active='true'], &:active": {
                            ...styles.toolbarButtonActive,
                        },
                    },

                    /* Separator Lines in Toolbar */
                    ".rsw-separator": {
                        ...styles.separator,
                    },

                    /* Content Area (Rich Text View) */
                    ".rsw-ce": {
                        ...styles.content,

                        minHeight: height,

                        ...(isDraggingOver
                            ? styles.contentDragging
                            : {}),

                        "& p": {
                            ...styles.paragraph,
                        },

                        "& blockquote": {
                            ...styles.blockquote,
                        },
                    },

                    /* Raw HTML Source Code View Mode */
                    ".rsw-html": {
                        ...styles.htmlSource,

                        minHeight: height,
                    },
                }}
            >
                <Editor
                    name={name}
                    value={value}
                    onChange={handleChange}
                    containerProps={{
                        style: {
                            resize: "vertical",
                            height: "auto",
                            border: "none",
                        },
                    }}
                />

                {/* Status & Character Count Footer */}
                <div
                    css={styles.footer}
                >
                    <div>
                        {helperText ? (
                            <span>
                                {helperText}
                            </span>
                        ) : (
                            <span>
                                {isDraggingOver
                                    ? "Release to insert item..."
                                    : "Drag items or tokens into editor"}
                            </span>
                        )}
                    </div>

                    <div
                        css={styles.footerStats}
                    >
                        <span>
                            {stats.words} words
                        </span>

                        <span
                            css={styles.footerSeparator}
                        />

                        <span>
                            {stats.chars} characters
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HtmlEditor;