type tagsProps = {
    name: string,
    color: string
}

function Tags(props: tagsProps) {

    return(
        <div className="text-xs font-medium bg-green-100 text-emerald-500 rounded-md py-1 px-2">{props.name}</div>
    )
}

export default Tags;