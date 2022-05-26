import classes from './card.module.css';

const Card = ({data, style}) => {
    return (
            
            <div style={style} className={classes.cardWrapperDiv}>
                <h2>{data.title}</h2>
                <h3>{data.subTitle}</h3>
                <p>{data.description}</p>
            </div>
        )
};

export default Card;