import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // تحديث الحالة عندما يحدث خطأ
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // يمكن إرسال الخطأ إلى خدمة خارجية هنا
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-zinc-300 text-red-800 rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Something went wrong.</h2>
                    <details className="whitespace-pre-wrap">
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
