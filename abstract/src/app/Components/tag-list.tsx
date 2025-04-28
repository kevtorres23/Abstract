import React, { useState, useEffect } from 'react';
import { useList } from '../Functions/TagListProvider';
import Tags from './default-tag';

function TagList() {

    const { tags } = useList();

    return (
        <>
            {tags.map((tag, index) => <li key={index}>
                <Tags color={tag.color} name={tag.name} id={tag.id}/>
            </li>)}
        </>
    )
}

export default TagList;