import "./Login.css";

const Login = () => {


    return(
        <div className="login-container"> 
            <div className="login-left">
                <header>
                    <h1>Welcome back to Pretty Login</h1>
                    <p>Its great to have you back</p>
                </header>
                <form action="#">
                    <div className="input-container">
                        <label >EMAIL</label>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <label >PASSWORD</label>
                        <input type="password" />
                    </div>
                    <div className="input-container col">
                       
                        <input type="checkbox" />
                        <div className="inline-text-container">
                            <p>Remember me?</p>
                            <p>Forgot password?</p>
                        </div>
                    </div>
                    <div className="input-container inline-text-container">
                       
                        <button className="btn login">LOGIN</button>
                        <button className="btn create-account">CREATE ACCOUNT</button>
                    </div>
                    <div className="input-container btn-container">
                       
                        <p >or login with </p>
                        <p className="c-primary">Facbook  &emsp; Google </p>
                    </div>
                </form>
            </div>
            <div className="login-right">
                <img src="https://media.istockphoto.com/id/1417433518/photo/pine-tree-forest-on-a-hill-desktop-background.jpg?b=1&s=170667a&w=0&k=20&c=G5b-owhVl4okeXUo8cDCWWrtpe3fqQGp3_lr-de20XE=" alt="login-right-img" />
            </div>
        </div>
    );
};

export default Login;