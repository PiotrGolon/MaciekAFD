import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import { useSessionsContext } from "../../store/session-context";
import UpcomingSession from "./UpcomingSession";
import Button from "../UI/Button";


type UpcomingSessionsProps = {
    onClose: () => void;
}

export default function UpcomingSessions({onClose}: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null);
    const sessionCtx = useSessionsContext();

    console.log(sessionCtx);

    useEffect( () => {
        if(modal.current){
            modal.current.open();
        }
    }, []);

    function handleCancelSession(sessionId: string) {
        sessionCtx.cancelSession(sessionId);
    }

    const hasSession = sessionCtx.upcomingSessions.length > 0;

    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Koszyk</h2>
            {hasSession && (
                <ul>
                    {sessionCtx.upcomingSessions.map((session) => (
                        <li key={session.id}>
                            <UpcomingSession
                                session={session}
                                onCancel={()=> handleCancelSession(session.id)}
                            />
                        </li>
                    ))}
                </ul>          
            )}
            {!hasSession && <p>Brak wybranych kursów.</p>}
            <p className="actions">
                <Button textOnly onClick={onClose}>Zamknij</Button>
                <Button onClick={onClose}>Przejdź do płatności</Button>
            </p>
        </Modal>
    );
}