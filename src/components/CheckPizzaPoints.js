import React, { useState } from 'react'
import { CardInfo } from './CardInfo';
import { Logo } from './Logo'
import Button from './ui/button';
import Input from './ui/Input'
import Validate from './utils/validations';

export const CheckPizzaPoints = () => {
    const [nro, setNro] = useState('');
    const [hasErrorPhone, setHasErrorPhone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [showCardInfo, setShowCardInfo] = useState(false);

    const handleDisableButton = () => {
        if(nro.length !==9 || hasErrorPhone ){
            return true;
        }
        return false;
    }

    const handleGetPoints = async () => {
        setLoading(true);
        
        const url = 'https://pizzas-0708-default-rtdb.firebaseio.com/users.json';
        const users = await fetch(url);
        const usersJson = await users.json();

        let userApi = usersJson.filter( usr => usr.celular === Number(nro) );

        setUser(userApi);

        if(!!userApi){
            setShowCardInfo(true);
            setLoading(false);
            setNro('');
        }

    }

    return (
        <div>

            <Logo />

            <h1> Consulta tus PizzaPuntos aquí y canjealos !! </h1>

            <div className="container-input">
                <Input 
                    label={'Ingresa tu nro. de Cel:'}
                    value={nro}
                    onChange={(e) => setNro(e)}
                    messageError="*Error: formato invalido."
                    type="number"
                    validation={Validate.verifyPhone}
                    minLength={9}
                    maxLength={9}
                    required
                    showError={hasErrorPhone}
                    setShowError={setHasErrorPhone}
                />

                <Button
                    loading={loading}
                    disabled={handleDisableButton()}
                    onClick={handleGetPoints}
                >
                    CONSULTAR
                </Button>

                {
                showCardInfo && 
                <CardInfo 
                    nombre={user[0].nombre}
                    pizzapuntos={user[0].pizzaPuntos}
                />
                }

            </div>

        </div>
    )
}
