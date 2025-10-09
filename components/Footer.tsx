import Link from "next/link";

export function Footer() {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="https://gitlab.com/behbehi"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        Gitlab
      </Link>
    </div>
  );
}
