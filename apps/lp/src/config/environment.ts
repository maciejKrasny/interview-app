interface EnvirontmentParams {
    API_URL: string;
}

const localEnvironment: EnvirontmentParams = {
    API_URL: 'http://localhost:3000'
}

export default function getEnvironmentVariables(): EnvirontmentParams {
    if (import.meta.env.NODE_ENV !== 'production') {
        return localEnvironment;
    }

    return {
        API_URL: ''
    };
}