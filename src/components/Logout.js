import { GoogleLogout } from "react-google-login";

const cliendID = "582624851900-lchrvtv7tn3f1mo33eai2ml765svdsao.apps.googleusercontent.com";


const Logout = () => {
    const onSuccess = () => {
        console.log("Logged Out!")
    }


    return (
        <div>
            <GoogleLogout 
                clientId={cliendID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;