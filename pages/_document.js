import Document, {
    Head,
    Main,
    NextScript
} from 'next/document';

class CustomDocument extends Document {
    render() {
        return ( <
            html >
            <
            Head >
            <
            /Head> <
            style jsx > {
                `
                body {
                    margin : 0px
                }
            `
            } <
            /style> <
            body >
            <
            Main / >
            <
            NextScript / >
            <
            /body> <
            /html>
        );
    }
}

export default CustomDocument;