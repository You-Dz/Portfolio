import img404 from '../../assets/images/404.webp'
function NotFound() {
    return (
        <>
            <h1>La page que vous recherchez n'existe pas</h1>
            <img src={img404} />
        </>
    )
}
export default NotFound