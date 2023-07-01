import React from 'react';
import '../Css/Getinfo.css';

function Getinfo() {
  return (
    <div   className='content'>
        <div>
            <img  src='https://png.pngtree.com/png-clipart/20230213/ourmid/pngtree-student-with-book-illustration-png-image_6597864.png' alt=''  width={"250px"} height={"400px"} />
        </div>
        <div>
            <form>
             <h1 className='get'  >  GET In Touch </h1>
                <div> 
                    <input type='text' placeholder=' First name '/>
                    <input type='text' placeholder=' Last name '/>
                </div>
                <div>
                    <input type='text' placeholder=' Email Address'/>
                    <input type='text' placeholder=' Phone No.'/>
                </div>
                <div>
                    <input   className='message'   type='text' placeholder=' Message'/>
                </div>
                <div>
                    <input    className='send'   type='submit ' value={"send"} />
                </div>
            </form>

            
        </div>

    </div>
   
  );
}

export default Getinfo;

