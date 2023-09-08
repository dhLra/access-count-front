import { useForm } from 'react-hook-form'
import Logo from '../styles/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
import { useState } from 'react';

export default function LoginPage() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [isLoginError, setIsLoginError] = useState(false)
    const [isLoadgin, setIsLoadgin] = useState(false)
    const auth: any = useAuth();
    const navigator = useNavigate();

    const onLogin = (e: any) => {
        setIsLoadgin(true)
        auth.authenticate(e).then((response: any) => {
            if (response.status === 200) {
                navigator('/home')
                setIsLoadgin(false)
            } else {
                setIsLoginError(true)
                setIsLoadgin(false)
            }
        });
    }

    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            {isLoadgin && <div className='d-flex vh-100 vw-100 d-flex flex-column justify-content-center align-items-center loading-screen' style={{ top: "0px" }}>
                <div className="spinner-border text-primary d-flex justify-content-center align-items-center" role="status">
                </div>
            </div>}
            <form className='text-center form-login' onSubmit={handleSubmit(onLogin)}>
                <img alt='logo' src={Logo} width={150}></img>
                <div className="mb-3 text-start">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", { required: true })} />
                    {errors.email && <p className="form-text"><small style={{ color: 'red' }}>Digite um email</small></p>}
                </div>
                <div className="mb-4 text-start">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password", { required: true })} />
                    {errors.password && <p className="form-text"><small style={{ color: 'red' }}>Digite um senha</small></p>}
                    {isLoginError ? <div id="emailHelp" className="form-text text-center"><p style={{ color: 'red' }}><small>Email ou senha invalidos!</small></p></div> : <div id="emailHelp" className="form-text"><small>Nunca compartilhe sua senha com ninguem!</small></div>}
                </div>
                <button type="submit" className="btn btn-primary w-50">Entrar</button>
                {/* <div className="mt-3 form-check p-0">
                    <a href=''> Esqueceu sua senha?</a>
                </div> */}
            </form>
        </div>
    )
}