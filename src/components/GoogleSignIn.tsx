import React from 'react';

const GoogleSignIn: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '360px',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google Logo"
          style={{ width: '75px', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#202124' }}>Sign in</h1>
        <input
          type="email"
          placeholder="Email or phone"
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4285f4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
          onClick={() => console.log('Sign in clicked')}
        >
          Sign In
        </button>
        <p style={{ fontSize: '14px', color: '#5f6368' }}>
          Not your computer? Use Guest mode to sign in privately.
        </p>
      </div>
    </div>
  );
};

export default GoogleSignIn;