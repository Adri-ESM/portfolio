import '../styles/globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  return <div>{children}</div>
}
