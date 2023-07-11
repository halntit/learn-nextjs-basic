import Link from "next/link"

export default () => (
    <div>
        <p>Hello World!</p>

        <ol>
            <li>
                <Link href="/contact">Contact me!</Link>
            </li>
            <li>
                <Link href="/blog">My Blog</Link>
            </li>
        </ol>
    </div>
);