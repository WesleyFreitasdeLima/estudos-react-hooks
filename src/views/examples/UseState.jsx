import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    // [valorAtual, funcaoModificadora] = useState(valorInicial);
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Default");

    // Funções exercicio 1
    const add = () => setCount(count + 1);
    const rmv = () => setCount(count - 1);
    const addThousand = () => setCount(current => current + 1000);
    const zero = () => setCount(0);

    // Funções Exercicio 2
    const changeName = (event) => setName(event.target.value);

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={rmv}>-1</button>
                    <button className="btn" onClick={add}>+1</button>
                    <button className="btn" onClick={addThousand}>+1000</button>
                    <button className="btn" onClick={zero}>0</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{name}</span>
                <input type="text" className="input" value={name} onChange={changeName} />

            </div>
        </div>
    )
};

export default UseState;
