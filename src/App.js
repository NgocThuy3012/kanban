import './App.css';
import img from "./assets/img/mountains.jpg"
import icon from "./assets/img/icon.png"
import { useState } from 'react';
import Status from './components/Status';
function App() {
  const toDo = [
    {
      text:"Gear up for Mt. Fuji!",
      img:{img},
      date:"Sep 30, 2021",
      icon:{icon},
      class:"todo"
    },
    {
      text:"Draft onboarding documentation for design team.",
      content:"Refer documentation templates from company wiki.",
      date:"Sep 26, 2021",
      icon:{icon},
      class:"todo"
    },
    {
      text:'Call aunt Edna ASAP!',
      content:['Rory’s library books are overdue.','Millie’s dentist appointment is cancelled.'],
      bg:'bg-pink'
    }
  ]
  const inProgress = [
    {
      text:"Finalize presentation deck.",
      date:"Sep 27, 2021",
      icon:{icon},
      class:"inprogress"
    },
    {
      text:'Upcoming performance reviews:',
      content:['Jacob ✓','Aubrey ✓','Devon (Postponed!)','Katie','Bassam','Gerald'],
      bg:'bg-b'
    }
  ]
  const done = [
    {
      text:"Progress meeting with Jason.",
      content:"Take notes. Ask questions after.",
      date:"Sep 25, 2021",
      icon:{icon}
    },
    {
      text:"Update travel mood-board with pics.",
      img:{img},
      link:"Link here.",
      date:"Sep 25, 2021",
      icon:{icon}
    },
    {
      text:"Delegate tasks for next week.",
      date:"Sep 26, 2021",
      icon:{icon}
    },
    {
      text:"Update Figma dev-team file by Monday!",
      content:"Aubrey to edit pages 2 to 14, Katie to assist if needed.Ps: Grant access to Katie.",
      date:"Sep 22, 2021",
      icon:{icon},
      background : true
    }
  ]
  const archive = [
    {
      text:"Schedule 1-on-1 with team.",
      date:"Sep 20, 2021",
      icon:{icon}
    },
    {
      text:'DON’T FORGET TO MEDITATE!',
      content:[],
      bg:'bg-blue'
    },
    {
      text:'Inbox ZERO! (Every Fri-yay!) 💃🏻 💃🏻 💃🏻',
      content:[],
      bg:'bg-yelow'
    }
  ]
  if(!localStorage.getItem('todo'))
  localStorage.setItem('todo', JSON.stringify(toDo))
  if(!localStorage.getItem('inprogress'))
  localStorage.setItem('inprogress', JSON.stringify(inProgress))
  if(!localStorage.getItem('done'))
  localStorage.setItem('done', JSON.stringify(done))
  if(!localStorage.getItem('archive'))
  localStorage.setItem('archive', JSON.stringify(archive))
  
  return (
    <div className='board-container'>
          <div className='card-container'>
              <div className='colum'>
              <Status
                  title='To Do'
                  keyStorage='todo'
                />
              </div>
              <div className='colum'>
              <Status
                  title='In Progress'
                  keyStorage='inprogress'
                />
              </div>
              <div className='colum'>
              <Status
                  title='Done'
                  keyStorage='done'
                />
              </div>
              {/* <div className='col-line'></div> */}
              <div className='colum'>
              <Status
                  title='Archive'
                  keyStorage='archive'
                />
              </div>
              
          </div>
    </div>
  );
}

export default App;
