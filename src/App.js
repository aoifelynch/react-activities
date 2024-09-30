import Clicker from "./components/Clicker";
import LoginForm from "./components/LoginForm";

const App = () => {
    return (
    <>
    <h1>welcome to react</h1>
    <LoginForm />
    <Clicker startFrom={0} />
    </>
)
};

export default App;