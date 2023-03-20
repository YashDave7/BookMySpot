import React from 'react'
import Professional from './Professional'


const Feed = ({pros,implementTransfer}) => {
  return (
    <main style={{    display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center'}}>
         {pros.map(profession => (
                <Professional key={profession.id} profession={profession} implementTransfer={implementTransfer} />
            ))}
    </main>
  )
}

export default Feed
