'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Coś poszło nie tak 😢</h1>
      <p>Spróbuj ponownie później.</p>
      <button onClick={reset}>Spróbuj ponownie</button>
    </div>
  );
}
