function LoginStatus({ isLoggedIn }) { 
return ( 
<div> 
{isLoggedIn ? <p>Witaj z powrotem!</p> : <p>Zaloguj się</p>} 
</div> 
); 
} 
export default LoginStatus; 