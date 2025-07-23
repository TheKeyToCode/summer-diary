import { getCollectionByName, getCardByNameAndSlug } from "../services/api";
import { useEffect, useState } from 'react'


export default function DaniilPage(){
    useEffect(()=>{
        getCollectionByName("posts").then((r)=>{
            console.log()
        })
    })
}