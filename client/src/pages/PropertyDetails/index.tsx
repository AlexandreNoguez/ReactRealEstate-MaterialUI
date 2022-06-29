import React from 'react';
import PropertyCards from '../../shared/components/PropertyCards';
import { LayoutBase } from '../../shared/layouts';

const PropertyDetails: React.FC = () => {
    return (
        <LayoutBase title=''>
            <PropertyCards />
        </LayoutBase>
    )
}

export default PropertyDetails;