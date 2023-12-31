import SessionList from '../components/Sessions/SessionList.tsx';
import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Dostępne kursy w sprzedaży</h2>
        <p>
          Znajdź kurs, który Cię interesuje, a następnie wskocz na wyższy level.
        </p>
      </header>
       <SessionList sessions={SESSIONS} />
    </main>
  );
}
