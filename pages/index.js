import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';


export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if(!isAuthenticated) return <Login />

  console.log(isAuthenticated)

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <Header />
        {/* Header */}
        <Messages />
        {/* Messages */}
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
