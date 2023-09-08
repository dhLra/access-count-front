import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { PostData } from '../services/PostDataService/PostData';
import { useAuth } from '../hooks/UseAuth';

export default function HomePage() {

    const [accessType, setAccessType] = useState('');
    // const [shoppingCount, setshoppingCount] = useState(0);
    // const [empresarialCount, setEmpresarialCount] = useState(0);
    const userDate:any = useAuth()
    const { handleSubmit, register } = useForm();

    const sendData = async (e: any) => {
        if (accessType === 'empresarial') {
            e.access_type = accessType
            // setEmpresarialCount(empresarialCount + 1)
            PostData(e)
        } else if (accessType === 'shopping') {
            e.access_type = accessType
            // setshoppingCount(shoppingCount + 1)
            PostData(e)
        }
        console.log(e)
        setAccessType('')
    }
    const renderForm = () => {
        if (accessType === 'shopping') {
            return (
                <>
                    <label className='mb-1'>Selecione o local de destino</label>
                    <select className='form-control' {...register('destination')}>
                        <option selected>Selecione o local de destino</option>
                        <option value={'3 Piso'}>3º Piso</option>
                        <option value={'Estacionamento'}>Estacionamento</option>

                    </select>

                    <button className='btn btn-primary  mt-3' type='submit' style={{ minWidth: "150px", maxWidth: "200px" }} > Enviar </button>
                </>
            )
        } else if (accessType === 'empresarial') {
            return (
                <>
                    <label className='mb-1'>Selecione o andar de destino</label>
                    <select className='form-control'  {...register('destination')}>
                        <option selected>Selecione o local de destino</option>
                        <option value={'6 Andar'}>6º Andar</option>
                        <option value={'7 Andar'}>7º Andar</option>
                        <option value={'8 Andar'}>8º Andar</option>
                        <option value={'9 Andar'}>9º Andar</option>
                        <option value={'10 Andar'}>10º Andar</option>
                        <option value={'11 Andar'}>11º Andar</option>
                        <option value={'12 Andar'}>12º Andar</option>
                        <option value={'13 Andar'}>13º Andar</option>
                        <option value={'14 Andar'}>14º Andar</option>
                        <option value={'15 Andar'}>15º Andar</option>
                    </select>

                    <button className='btn btn-primary mt-3' type='submit' style={{ minWidth: "150px", maxWidth: "200px" }} > Enviar </button>
                </>
            )
        } else {
            return <></>
        }
    }

    const renderTittle = () => {
        if (accessType === 'shopping') {
            return (
                <h4>Local Selecionado: Shopping</h4>
            )
        } else if (accessType === 'empresarial') {
            return (
                <h4>Local Selecionado: Empresarial</h4>
            )
        } else {
            return (<h4>Selecione um local</h4>)
        }
    }
    return (
        <>
            <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
                {/* <div className='row w-100 text-center align-items-center justify-content-center'>
                    {shoppingCount}
                    -
                    {empresarialCount}
                </div> */}
                <div className="row w-100 mt-5">
                    <div className='col-12 text-center justify-content-center align-items-center d-flex flex-column'>
                        {renderTittle()}
                    </div>
                    <div className="col-md-6 mt-3 col-sm-12 justify-content-center justify-content-md-end d-flex">
                        <button className="btn btn-primary" onClick={() => setAccessType('shopping')} style={{ minWidth: "150px", maxWidth: "200px" }}> Shopping </button>
                    </div>
                    <div className="col-md-6 mt-3 col-sm-12 justify-content-center justify-content-md-start d-flex">
                        <button className="btn btn-primary" onClick={() => setAccessType('empresarial')} style={{ minWidth: "150px", maxWidth: "200px" }}> Empresarial </button>
                    </div>
                    <div className='col-12 text-center justify-content-center align-items-center d-flex flex-column mt-5'>
                        <form onSubmit={handleSubmit(sendData)} className='col-md-6 col-sm-10'>
                            {renderForm()}
                        </form>
                    </div>

                    {userDate.isAdmin !== 1 ?
                        <div className='col-sm-12 col-md-12 justify-content-center d-flex align-items-center'>
                            <button className='btn btn-primary' style={{ position: "relative", top: "150px" }}>Baixar Relatorio</button>
                        </div> : <></>}
                </div>


            </div>


        </>
    )
}