
import { useCssHandles } from 'vtex.css-handles'
import React, { useState, useEffect } from "react";


const Wallet: StorefrontFunctionComponent = () => {
  const CSS_HANDLES = ['pts', 'imgpts', 'ptsapi','imgcoins', 'geral']
const handles = useCssHandles(CSS_HANDLES)
const [sessionData, setSessionData] = useState()
  const [valuePoints, setValuePoints] = useState();
  useEffect(()  => {
    fetch('/api/sessions?items=*')
    .then((res) => res.json())
    .then((res)=> setSessionData(res.namespaces.profile.id.value)
    );
    console.log(sessionData)
});
  
  useEffect(() => {
      fetch(`/_v/app/clientWallet`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-VTEX-API-AppKey": "vtexappkey-dreamscape-FMYVGX",
          "X-VTEX-API-AppToken": "BJAZBUUCECOLTNJLGRQDTJIILLWRQSTKJYUKLVIJBOSHOJSEXVLMJTDPXAUMNSRDTXEOUFZTBZRDVOXFTTJGYVXUWUPIOXENMWGDXXVQHASKUJWGDFAXNHLRBFEJPURG"
        },
        body: JSON.stringify({
  
            userId: sessionData
  
        })
      })
        .then((res) => res.json())
        .then((res)=> setValuePoints(res[0].balance)
        );
    });


  return (
    <>
    <h3 className={`${handles.geral}`}>  DreamCoins </h3>
    <div > 
  
    <table className={`${handles.pts}`}> 

    <tr>
      <td><img className={`${handles.imgpts}`} src='https://img.icons8.com/clouds/344/treasure-chest.png'/>
      </td>	
      <td className={`${handles.alinhar}`}>
      <img className={`${handles.imgcoins}`} src='https://img.icons8.com/emoji/2x/coin-emoji.png'/>
        <span className={`${handles.ptsapi}`}>{`${valuePoints}`} </span>
        </td>
      
    </tr>
    </table>
    
    </div>
    </>

  )

  }

export default Wallet
