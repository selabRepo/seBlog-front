import React from 'react';
import './BlogWriteHeader.scss';

import Button from '@material-ui/core/Button';

const BlogWriteHeader = ({ onBack, onSubmit }) => {
    return (
        <div className="editor-header">
            <div className="back">
                <Button onClick={onBack} color="secondary" variant="raised">뒤로가기</Button>
            </div>
            <div className="submit">
                <Button onClick={onSubmit} color="primary" variant="raised">저장하기</Button>
            </div>
        </div>
    );
};

export default BlogWriteHeader;
