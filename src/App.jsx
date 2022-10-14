import React from 'react'
import './styles/app.scss'

function App() {

    const [input1, setInput1] = React.useState('');
    const [input2, setInput2] = React.useState('');
    const [input3, setInput3] = React.useState('');
    const [result, setResult] = React.useState('');

    function ClearField1() {
        setInput1('');
    }

    function ClearField2() {
        setInput2('');
    }

    function ClearField3() {
        setInput3('');
    }


    return (
        <div className="page">
            <div className="card-block">
                <div className="card">
                    <h1>Card 1</h1>
                    <div className='form'>
                        <p>Введите число</p>
                        <input
                            id='in1'
                            type="text"
                            placeholder=''
                            value={input1}
                            onChange={(event) => setInput1(event.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    alert('Введено не число! ');
                                }
                            }}
                        />
                    </div>
                    <button
                        type='button'
                        onClick={() => {
                            ClearField1();
                            setResult((prev) => Number(prev) + Number(input1))
                        }}
                        placeholder={''}
                        disabled={!input1}
                    >Добавить
                    </button>
                </div>
                <div className="card">
                    <h1>Card 2</h1>
                    <div className='form'>
                        <p>Введите число</p>
                        <input
                            id='in2'
                            type="text"
                            placeholder=''
                            value={input2}
                            onChange={(event) => setInput2(event.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    alert('Введено не число! ');
                                }
                            }}/>
                    </div>
                    <button onClick={() => {
                        setResult((prev) => Number(prev) + Number(input2))
                        ClearField2()
                    }}
                            disabled={!input2}>Добавить
                    </button>
                </div>
                <div className="card">
                    <h1>Card 3</h1>
                    <div className='form'>
                        <p>Введите число</p>
                        <input
                            id='in3'
                            type="text"
                            placeholder=''
                            value={input3}
                            onChange={(event) => setInput3(event.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    alert('Введено не число! ');
                                }
                            }}/>
                    </div>
                    <button onClick={() => {
                        setResult((prev) => Number(prev) + Number(input3));
                        ClearField3()
                    }}
                            disabled={!input3}
                    >Добавить
                    </button>
                </div>
            </div>
            <div className="card-counter">
                <p>Счет: <span>{result}</span></p>
            </div>
        </div>
    )
}

export default App