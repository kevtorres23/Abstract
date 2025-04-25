import React, { useState, useEffect } from 'react';
import Tags from './default-tag';

type Tag = {
    name: string,
    color: string,
}

type TagListProps = {
    list: Tag[];
}

type TagListType = Tag[];

function TagList(props: TagListProps) {

    const [tagList, setTagList] = useState<TagListType>(props.list);

    useEffect(() => {
        setTagList(props.list);
    }, [props.list]);

    return (
        <>
            {tagList.map((tag, index) => <li key={index}>
                <Tags color={tag.color} name={tag.name} />
            </li>)}
        </>
    )
}

export default TagList;