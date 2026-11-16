// A template re-mounts on every navigation, so each page plays a gentle entrance animation.
export default function Template({ children }) {
  return <div className="page-in">{children}</div>;
}
