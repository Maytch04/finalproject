import React from 'react'

const styles={
    userHomeContainer:{
        width: 1300,
        background: '#53BE16'
    },
    header:{
        width: 650,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 20
    },
    userMain:{
        width: 650,
        padding: 10,
        background: '#53BE16',
        display: 'flex'
    },
    avatar:{
        width: 200,
        height: 200,
        background: 'white',
        border: '1px solid black',
        borderRadius: 3,
        display: 'inline-block'
    },
    nextBlock:{
        width: 430,
        display: 'inline-block',
        padding: 10
    },
    nextLabel:{  
        width: 430,
        height: 40,
        fontSize: 26,
        color: '#d50000',
        textAlign: 'center',
        paddingLeft: 10
    },
    nextGrid:{
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        width: 415,
        height: 120,
    },
    gridEntry:{
        height: 40,
        width: 206,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#1DA2CF'
    },
    gridWith:{
        height: 40,
        width: 412,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#1DA2CF'
    }
}

class UserHomePage extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.userHomeContainer}>
        <div style={styles.header}>Welcome to Go Vegas! User</div>
        
        <div style={styles.userMain}>
            <div style={styles.avatar}>Avatar</div>
            <div style={styles.nextBlock}>    
                <div style={styles.nextLabel}>Next Activity</div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>Date</div>
                    <div style={styles.gridEntry}>Location</div>
                    <div style={styles.gridEntry}>Hour AM/PM</div>
                    <div style={styles.gridEntry}>Activity</div>
                    <div style={styles.gridWith}>Partner (User Profile Link)</div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default UserHomePage