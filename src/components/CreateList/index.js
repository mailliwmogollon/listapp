import React from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '@the-collab-lab/shopping-list-utils';


export function CreateList() {
    let history = useHistory();
    const push = history.push;
    
    const generateToken = () => {
        const token = getToken();
        localStorage.setItem('token', token);
       const cat = localStorage.getItem('token');
        console.log(token)
        console.log(cat)
        push('/listpage');
      };


    return (
        <button onClick={generateToken}>Create new list</button>   
    );
  }