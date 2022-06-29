import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyDetails from '../../../pages/PropertyDetails';
import { useApi } from '../../hooks/useApi';
import { IPropertyProps } from '../../services/api';

// import { Container } from './styles';

const SearchInput: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [handleSearchProperty, setHandleSearchProperty] = useState('')
    const { data: property } = useApi<IPropertyProps[]>('catalog')
    // const handleRegisterButton = (e) => {
    //     e.preventDefault()
    //     console.log(email)
    //     console.log(password)
    // }
    const array1 = [1, 2, 3, 4, 5];

    return (
        <div>
            <form>
                {property?.filter((property) => property.title.toLowerCase().includes(handleSearchProperty))
                    .map((property, index) => {
                        return (
                            <div key={index}>
                                <p>{property.title}</p>
                            </div>

                        )
                    })}
                {/* <label>
                    <span>Email</span>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <button onClick={handleRegisterButton}>Cadastrar</button> */}
                <input type="text" onChange={e => setHandleSearchProperty(e.target.value)} />

            </form>
        </div >
    )
}

export default SearchInput;
