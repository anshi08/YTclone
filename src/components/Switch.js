import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react'
  

function Switch() {

    const [theme,setTheme] = useState("light-theme")

    const Handle = () => {
        // alert("finally!!!")
        if(theme === "dark-theme"){
            setTheme("light-theme")
          }else{
            setTheme("dark-theme")
          }
    }
    
    useEffect(() =>{
        document.body.className = theme;
      },[theme])

  return (
    <Form onClick={Handle}>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Dark mode:)"
      />
      </Form>
  );
}

export default Switch 