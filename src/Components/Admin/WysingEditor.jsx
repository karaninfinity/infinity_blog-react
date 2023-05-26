import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WysingEditor = () => {
    const [content, setContent] = useState('');
    return (
        <div>
            <ReactQuill value={content} onChange={(e) => setContent(e)} />
        </div>
    )
}

export default WysingEditor
