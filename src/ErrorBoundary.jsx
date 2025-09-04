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
        // Update state when an error occurs
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error (could also send to a monitoring service)
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-zinc-200 text-red-800 rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Something went wrong.</h2>

                    {/* Show full error details only in development */}
                    {import.meta.env.MODE === "development" && (
                        <details className="whitespace-pre-wrap">
                            {this.state.error?.toString()}
                            <br />
                            {this.state.errorInfo?.componentStack}
                        </details>
                    )}

                    <button
                        onClick={this.handleReset}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                    >
                        Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
