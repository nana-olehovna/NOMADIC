import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (
    <div className="pageWrapper">
      <h1>404</h1>
      <h1>Sorry this page doesn't exist so far...'</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
