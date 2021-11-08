import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


// micro fronts 띄울시, 문제 발생시 에러핸들링
const AsyncLoader = ({ children, noLoading }) => {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={noLoading ? '' : <span>loading...</span>}>
                {children}
            </React.Suspense>
        </ErrorBoundary>
    )
};

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return(
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                // <></>
            )
        }

        return this.props.children;
    }
}

export default AsyncLoader;
