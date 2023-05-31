import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <div>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.imageSrc}
                    title={info.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {`Address: ${info.address} ${info.city}, ${info.state} ${info.zipcode}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {`Rating: ${info.rating} stars`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={info.url} target="_blank" variant="contained">Learn More</Button>
                    <Button size="small" className="card-button-right" href={mapsRedirect} target="_blank" variant="contained">Maps</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default SavedBusiness;