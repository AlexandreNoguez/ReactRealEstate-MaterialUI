import { createContext, useCallback, useState, useContext, ReactNode } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOption: IDrawerOption[];
    children?: ReactNode;
    toggleDrawerOpen: () => void;
    setDrawerOption: (newDrawerOption: IDrawerOption[]) => void;
}

interface IDrawerOption {
    icon: string;
    path: string;
    label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext)
};

export const DrawerProvider = ({ children }: IDrawerContextData) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOption, setDrawerOption] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);
    const handleSetDrawerOption = useCallback((newDrawerOption: IDrawerOption[]) => {
        setDrawerOption(newDrawerOption);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOption, toggleDrawerOpen, setDrawerOption: handleSetDrawerOption }}>
            {children}
        </DrawerContext.Provider>
    )
}
