import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import { AnnounceProperty } from "../pages/Announce";
import { BuyProperty } from "../pages/Buy";
import { Contacts } from "../pages/Contacts";
import { Home } from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";
import { useDrawerContext } from "../shared/contexts";
import { useApi } from "../shared/hooks/useApi"
import { IPropertyProps } from "../shared/services/api";


export const AppRoutes = () => {
    const { data } = useApi<IPropertyProps[]>('catalog');
    const { setDrawerOption } = useDrawerContext()

    useEffect(() => {
        setDrawerOption([
            {
                icon: 'home',
                path: '/',
                label: 'Início',
            },
            {
                icon: 'store',
                path: '/comprar',
                label: 'Comprar',
            },
            {
                icon: 'campaign',
                path: '/anunciar',
                label: 'Anunciar',
            },
            {
                icon: 'contactsupport',
                path: '/contatos',
                label: 'Contatos',
            },
            {
                icon: 'info',
                path: '/sobre',
                label: 'Sobre',
            },
        ]);
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comprar" element={<BuyProperty data={data} />} />
            <Route path="/anunciar" element={<AnnounceProperty />} />
            <Route path="/contatos" element={<Contacts />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/catalog/:title" element={<PropertyDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
