import { FormEvent, useEffect, useRef } from "react";
import { type Session, useSessionsContext } from "../../store/session-context";
import Modal, { ModalHandle } from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

type BookSessionProps = {
    session: Session;
    onDone: () => void;
};
export default function BookSession({session, onDone}: BookSessionProps) {
    const modal = useRef<ModalHandle>(null);
    const sessionCtx = useSessionsContext();

    useEffect( () =>{
        if(modal.current){
            modal.current.open();
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data); // would normally send to server, together with session.id
        sessionCtx.bookSession(session);
        onDone();
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Wykup Kurs</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your Name" id="name" name="name" type="text" />
                <Input label="Your Email" id="email" name="email" type="email" />
                <p className="actions">
                    <Button type="button" textOnly onClick={onDone}>
                        Usuń
                    </Button>
                    <Button>
                        Kup Teraz
                    </Button>
                </p>
            </form>
        </Modal>
    );
}