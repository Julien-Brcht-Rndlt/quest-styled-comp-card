export default function CardHeader({ album, track, release, image }){
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