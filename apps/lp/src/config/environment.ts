interface EnvirontmentParams {
    API_URL: string;
}

const localEnvironment: EnvirontmentParams = {
    API_URL: 'http://localhost:3000'
}

export default function getEnvironmentVariables(): EnvirontmentParams {
    if (import.meta.env.MODE !== 'production') {
        return localEnvironment;
    }

    return {
        API_URL: import.meta.env.VITE_API_URL || ''
    };
}