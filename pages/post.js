import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return <h1>{router.query.title}</h1>;
}
