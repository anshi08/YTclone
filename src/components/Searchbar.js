
import React from 'react'
import { Button } from 'react-bootstrap'
import { Form,InputGroup } from 'react-bootstrap' 
import {useState} from 'react' 

function Searchbar({OnFormSubmit}){

  const [searchTerm,setSearchTerm] = useState('')

  const mode = () =>{
    setSearchTerm("");
 }
     
    return(
        <Form onSubmit={(e)=>{
          e.preventDefault()
          OnFormSubmit(searchTerm)
          mode()
        }}> 
        <InputGroup className="mb-3">
        <Form.Control type='text' placeholder='Search...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <Button type='submit'>Search</Button>
        
      </InputGroup>
      </Form>
                                     
    )
}

export default Searchbar


