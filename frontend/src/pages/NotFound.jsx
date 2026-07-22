import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-black text-secondary">404</p>
        <h1 className="mt-2 text-4xl font-black">Page not found</h1>
        <Button to="/" className="mt-6">Back to Home</Button>
      </div>
    </section>
  );
}
