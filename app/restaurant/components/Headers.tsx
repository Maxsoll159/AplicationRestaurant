export const Headers = ({name}: {name:string}) => {
    const title = (title:string) =>{
        let nuevoTitulo = title.replaceAll("-", " ")
        return nuevoTitulo
    }

    return (
        <div className="h-96 overflow-hidden">
            <div
                className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center"
            >
                <h1 className="text-7xl text-white captitalize text-shadow text-center capitalize">
                    {title(name)}
                </h1>
            </div>
        </div>
    )
}