export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex flex-1 justify-center gap-1 leading-4 hover:bg-blue-900 p-2 rounded-full"
    >
      <span>{children}</span>
    </a>
  );
}
