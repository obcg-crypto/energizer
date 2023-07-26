import { useEffect, useState } from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import traitementDoc from "../MenuData/menu1";
import Select from 'react-select'
import { Suivi } from "../MenuData/menu2";
import diversesExtraction from "../MenuData/menu3";
const Accordions = ({navSideData,setDisplayNav,setContainer}) => {
    const [data,setData]=useState([
        {title: "Nombre ", content: ["Lorem ipsum dolor sit amet."]},
        {title: "Historique", content: ["Lorem ipsum dolor sit amet."]},
        {title: "Statistique", content: ["Lorem ipsum dolor sit amet."]},
    ])
    const [option,setOption]=useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ])
    const [content,setContent]=useState([])
    const [optionSelected,setOptionSelected]=useState()
    console.log(traitementDoc.Traitement_des_dossiers)
    useEffect(() => {
        if (navSideData === 1) {
          
          setOption([
            { value: 'Traitement des dossiers', label: 'Traitement des dossiers' },
            { value: 'Etats Paiement', label: 'Etats Paiement' },
          ])
          if (optionSelected==="Traitement des dossiers") {
            setData(traitementDoc.Traitement_des_dossiers) 
            console.log("data loaded")           
          } else {
            setData(traitementDoc.Etats_Paiement) 
          }  
        } else if (navSideData === 2){
            setOption([
                { value: 'Suivi Employeur', label: 'Suivi Employeur' },
                { value: 'Suivi Assure', label: 'Suivi Assure' },
              ])
              setData(Suivi.Suivi_Employeur) 
              if (optionSelected==="Suivi Employeur") {
                setData(Suivi.Suivi_Employeur) 
                console.log("data loaded")           
              } else {
                setData(Suivi.suivi_Assure) 
              }
        }else if (navSideData === 3){
            setOption([
                { value: 'Suivi Employeur', label: 'Suivi Employeur' },
                { value: 'Suivi Assure', label: 'Suivi Assure' },
              ])
              setData(diversesExtraction.Suivi_employeur) 
              if (optionSelected==="Suivi Employeur") {
                setData(diversesExtraction.Suivi_employeur) 
                console.log("data loaded")           
              } else {
                setData(diversesExtraction.Suivi_Assure) 
              }
        }
        
    }, [optionSelected,navSideData]);
    const handleContent = (title)=>{
        data.forEach((e)=>{
            if (e.title==title) {
                setContent(e.content)
                console.log(e.content)
                return
            }
        })
    }
    const handleDisplayNav = (e)=>{
        setDisplayNav(false)
        setContainer(e)
        console.log(e);
    }
    /*const data = [
        {title: "Nombre ", content: "Lorem ipsum dolor sit amet."},
        {title: "Historique", content: "Lorem ipsum dolor sit amet."},
        {title: "Statistique", content: "Lorem ipsum dolor sit amet."},
    ];*/
    return (
        <>
        <div className="select_height">
            <Select onChange={(e)=>{setOptionSelected(e.value)}} options={option} />
        </div>
        <Accordion className="accordionContainer accordion_position">
            {data.map((item, index) => (
                <AccordionItem className="mt-3"  key={index}>
                    {({open}) => (
                        <>
                            <AccordionHeader onClick={()=>handleContent(item.title)} className={`accordionHeader p-2 ${open ? 'accordion-active-head' : ''}`}>
                                <span className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</span>
                            </AccordionHeader>
                            <AccordionBody className="">
                                    {item.content.map(e=>
                                        <div onClick={()=>handleDisplayNav(e)} className="accordion-body accordionBody">
                                            {e}
                                        </div>
                                        )}
                                    
                               
                            </AccordionBody> 
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
        </>
        
    );
};
export default Accordions;