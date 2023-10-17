import { HiArrowUpRight } from 'react-icons/hi2'

export default function Hero() {
    return (
        <section>
            <h1 className='my-4'>Boa leitura, Evandro</h1>
            <p className="text-lg font-semibold mb-4">Parabéns, você tem evoluido muito bem na sua meta!</p>
            <a className="btn" href="#">
                Explorar
                <HiArrowUpRight />
            </a>
        </section>
    )
}