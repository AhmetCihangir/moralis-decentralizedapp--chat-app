import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Drawer from 'rc-drawer'
import { useEffect, useState } from 'react';
import { idGenerator } from '../idGenerator';
import ReactModal from 'react-modal';
import ModalInput from '../components/ModalInput';

// Message
// {
//   username : "",
//   id : "",
//   
// }


export default function Home() {
  const { isAuthenticated, logout, user, setUserData } = useMoralis()
  const [opening, setOpening] = useState(false)
  const [profileConfiguration, setProfileConfiguration] = useState(false)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const completeConfiguration = () => {
    if(email.length > 0 || username.length > 0){
      setUserData({
        email,
        username,
        userId : idGenerator(8)
      })
      setProfileConfiguration(false)
    }
  }
  
  useEffect(() => {
    if(isAuthenticated){
      if(!user.get("email")){
          setProfileConfiguration(true)
        }
      }
      
    }, [])
    
    if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden flex justify-end">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer
        showMask={false}
        width="18vw"
        level={null}
        maskClosable={false}
        onHandleClick={() => setOpening(!opening)}
      ></Drawer>

      <div className={`w-4/5 ${opening ? "w-4/5" : "w-5/6 mx-auto"}`}>
        <Header />
        {/* Header */}
        <Messages />
        {/* Messages */}
      </div>

      {/* <button onClick={logout}>Logout</button> */}

      <ReactModal
        isOpen={profileConfiguration}
        style={{
          overlay: {
            zIndex: 11,
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            zIndex: 20,
            // backgroundColor: "white",
            width: "25%",
            height: "60%",
            position: "",
            background: "rgb(238,174,202)",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          },
        }}
        appElement={document.getElementById("modal")}
      >
        <div className="flex justify-center items-center flex-col relative h-full">
          <img src="/scene-1.svg" alt="" className="w-40 h-40 mb-7" />
          <p className="font-bold text-xl text-center">
            {" "}
            Complete Your Profile Configuration{" "}
          </p>
          <ModalInput
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Email..."
          />
          <ModalInput
            type="text"
            value={username}
            setValue={setUsername}
            placeholder="Username..."
          />

          <div className='flex justify-end mt-5 w-full'>
            <button className="bg-gradient-to-bl from-black to-fuchsia-900 text-white py-1 px-2 rounded-sm" onClick={completeConfiguration}>
              {" "}
              Complete{" "}
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
