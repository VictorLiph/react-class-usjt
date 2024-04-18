import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
const App = () => {
    return (
        // container principal
        <div className="container border rounded mt-2">
            {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
            {/* linha para o primeiro pedido pedido*/}
            <div className="row">
                {/* controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">22/04/2021</div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-hdd fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD Kingston A400 - SATA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* linha para o segundo pedido pedido*/}
            <div className="row">
                {/* controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">23/04/2021</div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Book</h4>
                                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* linha para o Terceiro pedido pedido*/}
            <div className="row">
                {/* controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">24/04/2021</div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-mouse fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Mouse</h4>
                                <p className="text-center">Mouse Bluetooth 8000 DPI - Logitech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* linha para o quarto pedido pedido*/}
            <div className="row">
                {/* controle de colunas para responsividade*/}
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">25/04/2021</div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-laptop fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Notebook</h4>
                                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)