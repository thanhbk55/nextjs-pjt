import Link from 'next/link'
export default props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)