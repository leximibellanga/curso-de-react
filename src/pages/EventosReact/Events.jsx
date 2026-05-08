import Event from './components/Event';
import FormEvent from './components/FormEvent';

const Events = () => {
    return (
        <>
            <Event nr={1} />
            <Event nr={2} />
            <Event nr={3} />
            <FormEvent />
        </>
    )
}

export default Events