import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm.jsx";
import ChatFeed from "./components/ChatFeed.jsx";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="a8e90a89-f606-49ae-aad1-5f384f2b7e53"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
