import Link from 'next/link';

const Post = (props) => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            {props.title}
        </Link>
    </li>
);

export default () => (
    <div>
        <h2>My blog</h2>
        <ul>
            <Post slug="yet-another-post" title="Yet another post" />
            <Post slug="second-post" title="Second post" />
            <Post slug="hello-world" title="Hello, world!" />
        </ul>
    </div>
);
