import ReactQuill, { Quill } from "react-quill";
import ImageResize from 'quill-image-resize-module-react';
import hljs from 'highlight.js';
import 'react-quill/dist/quill.snow.css';
import "highlight.js/styles/atom-one-dark.css";
import { StyledLabel } from "./RichTextEditor.styled";
import React from "react";

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'code-block'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { align: ['', 'center', 'right'] }
        ],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
    },
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    },
    syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value
    }
};

const formats = [
    "header",
    "bold",
    "underline",
    "code-block",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
];

Quill.register('modules/imageResize', ImageResize);

interface RichTextEditorProps {
    label: string;
    value?: string;
    onChange: (text: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, value, onChange }) => {
    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <ReactQuill
                modules={modules}
                formats={formats}
                onChange={onChange}
                value={value}
            />
            {/* <ReadOnlyContainer>
                <div className="ql-syntax">
                    <div dangerouslySetInnerHTML={{ __html: value }} />
                </div>
            </ReadOnlyContainer> */}
        </div>
    )
}

export default React.memo(RichTextEditor, (oldProps, newProps) => {
    return oldProps.value === newProps.value;
});