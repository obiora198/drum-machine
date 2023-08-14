

export default function Home() {
  const drumKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  const keyIds = {
    'Q':'Heater1', 
    'W':'Heater2', 
    'E':'Heater3', 
    'A':'Heater4', 
    'S':'Clap', 
    'D':'Open-HH', 
    'Z':"Kick-n'-Hat", 
    'X':'Kick', 
    'C':'Closed-HH'
  }

  return (
    <main>
      <div id="drum-machine">
        <div>
          {drumKeys.map(key=>{
            <button id={keyIds.key} className="drum-pad">{key}</button>
          })}
        </div>
        <div>
          <button></button>
          <div id="display"></div>
          <button></button>
        </div>
      </div>
    </main>
  )
}
