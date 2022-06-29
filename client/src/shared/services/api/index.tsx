import React from "react";
import { useApi } from "../../hooks/useApi";
export interface IPropertyProps {
    title: string;
    description: string;
    address: string;
    rentOrBuy: "rent" | "buy";
    value: number;
    image: string;
}

export const Api: React.FC = () => {
    function dataAtualFormatada() {
        var data = new Date(),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    const { data: property, isFetching } = useApi<IPropertyProps[]>('catalog');
    return (
        // <ImageList
        //     sx={{
        //         width: '100%',
        //         height: '450px',
        //         display: 'grid'
        //     }}>
        //     <ImageListItem sx={{ margin: "auto", }} cols={7} key="Subheader" >
        //         <ListSubheader component="p">{`Você está vendo os imóveis no dia ${dataAtualFormatada()}`}</ListSubheader>
        //     </ImageListItem>
        //     {isFetching && <p>Carregando os dados...</p>}
        //     {property?.map((item, index) => (
        //         <ImageListItem
        //             key={index}
        //             sx={{
        //                 display: 'flex',

        //             }}

        //         >

        //             <img
        //                 src={item.url}
        //                 alt={item.title}
        //                 loading="lazy"
        //             />

        //             <ImageListItemBar
        //                 title={item.title}
        //                 about={item.description}
        //                 actionIcon={
        //                     <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} >
        //                         <Icon>favorite</Icon>
        //                     </IconButton>
        //                 }
        //             />
        //         </ImageListItem>
        //     ))
        //     }
        // </ImageList >
        <div></div>
    );
}

const itemData = [
    {
        id: "1",
        title: "Bairro Sarandi em Porto Alegre",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg"
    },
    {
        id: "2",
        title: "Bairro centro em Porto Alegre",
        image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?cs=srgb&dl=pexels-jovydas-pinkevicius-2462015.jpg&fm=jpg"
    },
    {
        id: "3",
        title: "Bairro Higienópolis em Porto Alegre",
        image: "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?cs=srgb&dl=pexels-george-becker-129494.jpg&fm=jpg"
    },
    {
        id: "4",
        title: "Bairro Petrópolis em Porto Alegre",
        image: "https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?cs=srgb&dl=pexels-luis-quintero-2111768.jpg&fm=jpg"
    },
    {
        id: "5",
        title: "Bairro São Luiz em Porto Alegre",
        image: "https://images.pexels.com/photos/981916/pexels-photo-981916.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-981916.jpg&fm=jpg"
    },
    {
        id: "6",
        title: "Bairro São Pedro em Porto Alegre",
        image: "https://images.pexels.com/photos/2370932/pexels-photo-2370932.jpeg?cs=srgb&dl=pexels-anna-filyaeva-2370932.jpg&fm=jpg"
    },
    {
        id: "7",
        title: "Bairro São Pedro em Porto Alegre",
        image: "https://images.pexels.com/photos/2370932/pexels-photo-2370932.jpeg?cs=srgb&dl=pexels-anna-filyaeva-2370932.jpg&fm=jpg"
    }
];




// // export const CardApi: React.FC = () => {
// //     const [repository, setRepository] = useState<IRepositoryProps[]>([]);

// //     useEffect(() => {
// //         axios.get('http://localhost:3333/catalog')
// //             .then(res => {
// //                 setRepository(res.data);
// //             });
// //     }, []);

// //     return (
// //         repository.map((repo) => (
// //             <Card sx={{ maxWidth: 345 }}>
// //                 <CardMedia
// //                     component="img"
// //                     alt="green iguana"
// //                     height="140"
// //                     image={repo.url}
// //                     key={repo.url}
// //                 >)


// //                 </CardMedia>

// //                 <CardContent>
// //                     <Typography gutterBottom variant="h5" component="div">
// //                         {repo.title}
// //                     </Typography>
// //                     <Typography variant="body2" color="text.secondary">
// //                         {repo.description}
// //                     </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                     <Button size="small">Share</Button>
// //                     <Button size="small">Learn More</Button>
// //                 </CardActions>
// //             </Card>
// //         )))
// // }

// // const ListPropertyLink: React.FC<IListItemPropertyProps> = ({ icon, label, to, onClick }) => {
// //     const navigate = useNavigate();

// //     const resolvedPath = useResolvedPath(to);
// //     const match = useMatch({ path: resolvedPath.pathname, end: false });

// //     const handleClick = () => {
// //         navigate(to);
// //         onClick?.();
// //     }

// //     return (
// //         <ListItemButton selected={!!match} onClick={handleClick}>
// //             <ListItemIcon>
// //                 <Icon>{icon}</Icon>
// //                 <Link to="/inicio"></Link>
// //             </ListItemIcon>
// //             <ListItemText primary={label} />
// //         </ListItemButton>
// //     )
// // }
