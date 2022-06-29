const Property = require('../models/Property')

exports.registerNewProperty = async (req, res) => {
    try {
        const  { title, description, address, rentOrBuy, value, image } = req.body;

        if(!title){
            return res.status(400).send({ error: 'Invalid property name' })
        }
        if(!description){
            return res.status(400).send({ error: 'Invalid property description' })
        }
        if(!address){
            return res.status(400).send({ error: 'Invalid address description' })
        }
        if(!rentOrBuy){
            return res.status(400).send({ error: 'Invalid rentOrBuy type' })
        }
        if(!value){
            return res.status(400).send({ error: 'Invalid property value' })
        }
        if(!image){
            return res.status(400).send({ error: 'Invalid property url' })
        }

        if (await Property.findOne({ title })){
            return res.status(400).send({ error: 'Property already exists'})
        }
        const property = await Property.create(req.body);


        return res.send({ property });
    } catch (err) {
        return res.status(400).send({error: 'Failed on registration'});
    }
}
exports.editPropertyRegister = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const {
            title,
            description,
            address,
            rentOrBuy,
            value,
            image
        } = req.body;
        
        const propertyDetails = {
            title,
            description,
            address,
            rentOrBuy,
            value,
            image,
        }
        if(!propertyId){
                return res.status(422).send({error: "Property not found" })
            }
            
            const updateProperty = await Property.findByIdAndUpdate({
                _id: propertyId},
                propertyDetails, 
                {new: true});
    
                updateProperty.save(propertyId)
                return res.status(200).send({
                    updateProperty, 
                    message: 'Property details updated successfuly'
                })
                
            }catch (err) {
                console.log(err)
                return res.status(400).send({error: "Failed to update user's details"})
        }
    }

exports.listAllProperty = async (req, res) => {
    try {
        const property = await Property.find();
        return res.status(200).send(property)
        
    } catch (err) {
        return res.status(400).send({error: 'Failed listing products'});
    }

}

exports.listOnePropertyById = async (req, res) => {
    try {
        const property = await Property.findOne();
        return res.status(200).send(property)
        
    } catch (err) {
        return res.status(400).send({error: 'Failed listing products'});
    }

}

exports.deletePropertyById = async (req, res) => {
    try {
        const propertyId = req.params.id
        const property = Property.findById({ _id: propertyId})

        if(!property){
            return res.status(400).send({error: 'Failed on delete property by id'})
        }
        await Property.findOneAndDelete({ _id: propertyId });
        return res.status(200).send({ message: 'Property removed successfuly' })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Failed deleting property by id'})
        
    }
}