import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'monospace',
            textAlign: 'left'
        }
    }, 
    palette: {
        other: {
            main: "#e6a029"
        }
    }
})

function SavedBusiness(props) {
    const data = props.businessInfo;

    const info = {
        imageSrc : data.image_url,
        address : data.location.address1,
        name : data.name,
        city : data.location.city,
        state : data.location.state, 
        zipcode : data.location.zip_code,
        category : data.categories[0].title,
        rating: data.rating,
        reviewcount: data.review_count,
        link: data.url,
        phone: data.display_phone.replace(" ", "")
    }

    const splitAddress = info.address ? info.address.split(" ") : [];
    const splitCity = info.city ? info.city.split(" ") : [];
    const fullAddress = [...splitAddress, ...splitCity, info.state, info.zipcode].join("+");
    const mapsRedirect = `https://www.google.com/maps/place/${fullAddress}`;

    return (
        <div className="business-card">
            <ThemeProvider theme={theme}>
                <CardActionArea href={info.link} target="_blank">
                    <Card sx={{ borderRadius: 3}}>
                        <CardMedia
                            sx={{ height: 140}}
                            image={info.imageSrc}
                            title={info.name}
                        />
                        <CardContent sx={{border: 1, borderColor: 'other.main', borderBottom: 0}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                            {info.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {`Address: ${info.address} ${info.city}, ${info.state} ${info.zipcode}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {`Rating: ${info.rating} stars`}
                            </Typography>

                        </CardContent>
                        <CardActions sx={{border: 1, borderColor: 'other.main', borderTop: 0}}>
                                <Button size="small" href={info.link} target="_blank" variant="text">Learn More</Button>
                                <Button size="small" className="card-button-right" href={mapsRedirect} target="_blank" variant="text">Maps</Button>
                        </CardActions>
                    </Card>
                </CardActionArea>
            </ThemeProvider>
        </div>
    );
}

export default SavedBusiness;