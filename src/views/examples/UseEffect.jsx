import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
    // Exercicio 1
    const [number, setNumber] = useState(1);
    const changeNumber = (event) => setNumber(event.target.value);

    const [fatorial, setFatorial] = useState(1);
    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    // Exercicio 2
    const [status, setStatus] = useState('Impar');
    const changeStatus = (newStatus) => setStatus(newStatus);
    useEffect(() => {
        const newStatus = number % 2 === 0 ? 'Par' : 'Impar';
        changeStatus(newStatus);
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial < 1 ? "Não existe" : fatorial}</span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={changeNumber}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
};

export default UseEffect;
