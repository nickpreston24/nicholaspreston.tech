
export const ZeitAvatar = (image, title, scale = 8) => {
    // console.log('image :>> ', image);
    return (
        <div>
            <img
                // style={styles.imageCircle}
                src={image.image}
                alt={title}>
            </img>
            <g>
                idk
            </g>
            {/* <style jsx>{`    
                width: "${scale}em",
                height: "${scale}em",
                clipPath: "circle(50% at 50% 50%)"
            `}
            </style> */}
        </div>
    );
}

export default ZeitAvatar;