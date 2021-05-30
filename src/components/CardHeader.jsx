export default function CardHeader({ album = 'album #1', track = 'track #1', release = '2021', image = null}){
    return(
        <div>
            <div>
                <img src={image} alt={`${album} - ${track} - display`} />
            </div>
            <div>
                <h4>{ album }</h4>
                <div>
                    <span>{ track }</span>
                    <span>{ release }</span>
                </div>
            </div>
        </div>
    )
}