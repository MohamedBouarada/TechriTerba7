import styles from "./SidebarDetails.module.css";
import dataSidebarDetails from "./dataSidebarDetails";

export const SidebarDetail=({title})=>{
    const list=dataSidebarDetails.filter(elt=>elt.categorie==title);
    return (
     <>

             {list.map((elt)=>{
                     return  elt.childrenelts.map((e)=>{
                             const {titleArray,type}=e;
                             return(
                                 <ul className={styles.body}>
                                     {type}

                                         {titleArray.map((obj)=>{
                                             console.log(obj);
                                                 return (
                                                     <li className={styles.objet}>{obj}</li>
                                                 );
                                             }
                                         )}

                                 </ul>
                             );
                     }
                     )



             }
             )}

     </>
    );
}