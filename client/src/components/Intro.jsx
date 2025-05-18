function Intro(){
    return(
    <>  
        {/* Profile picture */}
        <img src="/profile_picture.jfif"  alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
        
        
        <p>Welcome to my personal website, fellow internet surfer!</p>
        <p>Here I post about my work, projects, passions, thoughts, whatever really. </p>

        <h2>About me</h2>
        <p>I was born and raised in St Albans, Hertfordshire, England and have
        spent my whole life here more or less (although I regularly go into London)
        </p>


        <p>I used to work for 
        <span style={{ color: "#4285F4" }}> G</span>
        <span style={{ color: "#DB4437" }}>o</span>
        <span style={{ color: "#F4B400" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#0F9D58" }}>l</span>
        <span style={{ color: "#DB4437" }}>e</span>,
           specifically on the Android Google App.
           I spent two years there as a SWE apprentice, which I very much enjoyed, 
           but I couldn't secure a full time position there afterwards due to headcount shortages
           and layoffs :( </p>
        
        <p>After that, I spent some time travelling and endulging in my hobbies (some breathing
            room to figure out my next step). I ended up doing an internship at Nazare Point LTD, 
            where I learnt about quant trading</p>

        <p>As for whats to come next, I'm currently building projects, learning things, and improving
            my programming skills!
        </p>
    </>
    );
}

export default Intro