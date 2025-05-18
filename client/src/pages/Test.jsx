import { useState } from "react";




const message_1 = `We understand that receiving constant negative feedback can have a significant 
                impact on a candidate’s mental health, especially in today’s competitive job market.
                 If you prefer not to receive an email notification regarding your rejection, 
                 you may opt out by ticking the box to the left`;

const message_2 = `You will still be able to check the status of your application proactively through our 
                   recruiting tool. Additionally, if you proceed to an interview, 
                   we will provide you with feedback regardless of the outcome.`;


function Test(){
    const [checked, setChecked] = useState(false);
  

 
    return (
        <div style={styles.container}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          style={styles.checkbox}
        />
        <p style={styles.text}>
            {message_1}
            <br></br>
            <br></br>
            {message_2}
   
        </p>
      </div>
    );

}

const styles = {
    container: {
      display: "flex",
      alignItems: "center", // Centers checkbox and text vertically
    },
    checkbox: {
      width: "20px",
      height: "20px",
      marginRight: "60px", // Adds space between checkbox and text
    },
    text: {
      fontSize: "16px",
    },
  };

export default Test